package site.conghucai.blogms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.session.SessionInformationExpiredStrategy;
import site.conghucai.blogms.interceptor.SecurityInterceptor;

import javax.annotation.Resource;

@Configuration
@EnableWebSecurity
public class BlogSecurityConfig extends WebSecurityConfigurerAdapter {

    @Resource
    private UserDetailsService userDetailsService;
    @Resource
    private AuthenticationEntryPoint authenticationEntryPoint;
    @Resource
    private AccessDeniedHandler accessDeniedHandler;
    @Resource
    private AuthenticationSuccessHandler authenticationSuccessHandler;
    @Resource
    private AuthenticationFailureHandler authenticationFailureHandler;
    @Resource
    private LogoutSuccessHandler logoutSuccessHandler;
    @Resource
    private SessionInformationExpiredStrategy sessionInformationExpiredStrategy;
    @Resource
    private AccessDecisionManager accessDecisionManager;
    @Resource
    private FilterInvocationSecurityMetadataSource securityMetadataSource;
    @Resource
    private SecurityInterceptor securityInterceptor;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable();
        http.authorizeRequests()
                .withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                    @Override
                    public <O extends FilterSecurityInterceptor> O postProcess(O o) {
                        o.setAccessDecisionManager(accessDecisionManager);//决策管理器
                        o.setSecurityMetadataSource(securityMetadataSource);//安全元数据源
                        return o;
                    }
                })
                .and().formLogin().permitAll()	//允许任何用户访问login接口
                .successHandler(authenticationSuccessHandler)	//自定义的登陆成功处理
                .failureHandler(authenticationFailureHandler)	//自定义的登陆失败处理
                .and().logout().permitAll()	//允许任何用户访问logout接口
                .logoutSuccessHandler(logoutSuccessHandler).deleteCookies("JSESSIONID")	//自定义的登出后的操作，同时要求登出后删除Cookie中的JSESSIONID
                .and().exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint) //自定义的匿名用户直接访问的处理，用于屏蔽框架自带的login界面
                .accessDeniedHandler(accessDeniedHandler)   //权限不足，访问被拒绝的操作
                .and().sessionManagement()	//只允许用户持有唯一的一个session，再申请会销毁之前的。
                .maximumSessions(1).expiredSessionStrategy(sessionInformationExpiredStrategy)	//会话失效的自定义处理
        ;
        http.addFilterBefore(securityInterceptor, FilterSecurityInterceptor.class);	//执行拦截器进行鉴权
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}

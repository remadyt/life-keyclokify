import { FormEventHandler, useState } from "react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button, Center, Group, PasswordInput, SimpleGrid, TextInput, Title } from "@mantine/core";
import { useConstCallback } from "keycloakify/tools/useConstCallback";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { realm, url, usernameHidden, login, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
        e.preventDefault();

        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        //NOTE: Even if we login with email Keycloak expect username and password in
        //the POST request.
        formElement.querySelector("input[name='email']")?.setAttribute("name", "username");

        formElement.submit();
    });

    return (
        // <Template
        //     kcContext={kcContext}
        //     i18n={i18n}
        //     doUseDefaultCss={doUseDefaultCss}
        //     classes={classes}
        //     displayMessage={!messagesPerField.existsError("username", "password")}
        //     headerNode={msg("loginAccountTitle")}
        //     displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
        // >
        <SimpleGrid style={{ minHeight: "100vh", height: "100%" }} cols={2} id="kc-form">
            {/*<div id="kc-form-wrapper">*/}
            <Center className="login-page-left-section">
                {/*<AppLogoIcon />*/}
                <svg fill="current" height="24" viewBox="0 0 46 24" width="46" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.72444 0.629913H0.561951V18.8775H3.72444V0.629913Z" fill="#01228F" />
                    <path d="M9.63233 5.91162H6.46985V18.8771H9.63233V5.91162Z" fill="#01228F" />
                    <path
                        d="M9.98414 2.07463C9.98414 2.45425 9.87145 2.82534 9.66034 3.14099C9.44922 3.45663 9.14915 3.70264 8.79808 3.84791C8.447 3.99319 8.06069 4.0312 7.688 3.95714C7.3153 3.88308 6.97295 3.70027 6.70425 3.43184C6.43555 3.16341 6.25256 2.82141 6.17843 2.44908C6.10429 2.07676 6.14234 1.69083 6.28776 1.34011C6.43318 0.98939 6.67944 0.689623 6.9954 0.478718C7.31136 0.267813 7.68282 0.155243 8.06282 0.155243C8.57239 0.155243 9.06108 0.357464 9.4214 0.717419C9.78172 1.07737 9.98414 1.56558 9.98414 2.07463Z"
                        fill="#01228F"
                    />
                    <path
                        d="M38.4502 17.0381C38.4498 17.4603 38.3242 17.8729 38.0893 18.2239C37.8543 18.5748 37.5206 18.8483 37.1301 19.0099C36.7397 19.1714 36.3101 19.2138 35.8955 19.1316C35.481 19.0494 35.1002 18.8464 34.8011 18.5481C34.502 18.2499 34.298 17.8698 34.215 17.4558C34.132 17.0418 34.1737 16.6126 34.3347 16.2222C34.4957 15.8319 34.7689 15.498 35.1198 15.2626C35.4706 15.0273 35.8834 14.9011 36.306 14.8999C36.587 14.8999 36.8652 14.9553 37.1248 15.0627C37.3844 15.1702 37.6202 15.3277 37.8188 15.5263C38.0174 15.7249 38.1749 15.9606 38.2822 16.22C38.3896 16.4794 38.4447 16.7574 38.4444 17.0381"
                        fill="#01228F"
                    />
                    <path
                        d="M38.4506 7.75437C38.4498 8.17648 38.3239 8.5889 38.0887 8.93958C37.8535 9.29026 37.5196 9.56347 37.1292 9.72474C36.7387 9.88601 36.3091 9.92811 35.8947 9.84571C35.4803 9.76331 35.0997 9.56012 34.8007 9.26178C34.5018 8.96344 34.2981 8.58332 34.2153 8.16941C34.1324 7.7555 34.1741 7.32634 34.3352 6.93611C34.4963 6.54589 34.7695 6.21207 35.1203 5.97682C35.4711 5.74156 35.8839 5.6154 36.3064 5.61426C36.8737 5.61477 37.4176 5.84026 37.8186 6.2412C38.2196 6.64213 38.4448 7.1857 38.4448 7.75245"
                        fill="#01228F"
                    />
                    <path
                        d="M41.1381 0L39.3801 1.3071C41.2706 4.64683 42.2198 7.73704 42.2198 11.9981C42.2198 16.2591 41.2629 19.3551 39.3801 22.6929L41.1477 24C43.8279 20.8791 45.438 16.3704 45.438 12C45.438 7.62956 43.8279 3.12284 41.1477 0"
                        fill="#01228F"
                    />
                    <path
                        d="M17.9326 3.20538C18.4642 3.19291 18.9934 3.28015 19.4927 3.46258V0.925153C18.7341 0.680033 17.9403 0.560732 17.143 0.571987C15.8346 0.571987 14.7452 0.925153 14.042 1.62573C13.3388 2.32631 12.9603 3.23417 12.9603 4.91556V5.91172H11.1696V8.40692H12.9603V18.8733H16.0939V8.40116H19.4639V5.90596H15.994V5.2073C15.994 3.82727 16.776 3.19963 17.9326 3.19963"
                        fill="#01228F"
                    />
                    <path
                        d="M25.8177 5.61431C21.8982 5.61431 19.3352 8.49339 19.3352 12.2439C19.3352 16.551 22.2998 19.1748 26.1443 19.1748C28.5825 19.1748 30.3155 18.1959 31.5721 16.6892L29.8909 15.1978C28.9112 16.1017 27.6315 16.6117 26.298 16.6297H26.1943C24.2422 16.6297 22.7013 15.5145 22.4304 13.3513H31.9102C32.2945 10.2055 31.2992 5.60663 25.8177 5.60663V5.61431ZM22.4785 11.1728C22.7916 9.19588 24.0981 8.15365 25.7927 8.15365C27.6449 8.15365 28.961 9.21699 28.9937 11.1728H22.4785Z"
                        fill="#01228F"
                    />
                </svg>
            </Center>

            <Center>
                {realm.password && (
                    <form style={{ maxWidth: "400px", width: "100%" }} id="kc-form-login" onSubmit={onSubmit} action={url.loginAction} method="post">
                        {/*{!usernameHidden && (*/}
                        {/*    <div className={kcClsx("kcFormGroupClass")}>*/}
                        <Title mb={32} size={32} order={1}>
                            {msg("loginAccountTitle")}
                        </Title>

                        <TextInput
                            label={msg("username")}
                            tabIndex={2}
                            mb={12}
                            id="username"
                            // className={kcClsx("kcInputClass")}
                            name="username"
                            defaultValue={login.username ?? ""}
                            type="text"
                            autoFocus
                            autoComplete="username"
                            aria-invalid={messagesPerField.existsError("username", "password")}
                        />
                        {messagesPerField.existsError("username", "password") && (
                            <span
                                id="input-error"
                                className={kcClsx("kcInputErrorMessageClass")}
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: messagesPerField.getFirstError("username", "password")
                                }}
                            />
                        )}
                        {/*    </div>*/}
                        {/*)}*/}

                        <div className={kcClsx("kcFormGroupClass")}>
                            {/*<label htmlFor="password" className={kcClsx("kcLabelClass")}>*/}
                            {/*    {msg("password")}*/}
                            {/*</label>*/}
                            <PasswordInput
                                label={msg("password")}
                                mb={24}
                                aria-invalid={messagesPerField.existsError("username", "password")}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                            />
                            {/*<PasswordWrapper kcClsx={kcClsx} i18n={i18n} passwordInputId="password">*/}
                            {/*    <input*/}
                            {/*        tabIndex={3}*/}
                            {/*        id="password"*/}
                            {/*        className={kcClsx("kcInputClass")}*/}
                            {/*        name="password"*/}
                            {/*        type="password"*/}
                            {/*        autoComplete="current-password"*/}
                            {/*        aria-invalid={messagesPerField.existsError("username", "password")}*/}
                            {/*    />*/}
                            {/*</PasswordWrapper>*/}
                            {usernameHidden && messagesPerField.existsError("username", "password") && (
                                <span
                                    id="input-error"
                                    className={kcClsx("kcInputErrorMessageClass")}
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: messagesPerField.getFirstError("username", "password")
                                    }}
                                />
                            )}
                        </div>

                        {/*<div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>*/}
                        {/*    <div id="kc-form-options">*/}
                        {/*        {realm.rememberMe && !usernameHidden && (*/}
                        {/*            <div className="checkbox">*/}
                        {/*                <label>*/}
                        {/*                    <input*/}
                        {/*                        tabIndex={5}*/}
                        {/*                        id="rememberMe"*/}
                        {/*                        name="rememberMe"*/}
                        {/*                        type="checkbox"*/}
                        {/*                        defaultChecked={!!login.rememberMe}*/}
                        {/*                    />{" "}*/}
                        {/*                    {msg("rememberMe")}*/}
                        {/*                </label>*/}
                        {/*            </div>*/}
                        {/*        )}*/}
                        {/*    </div>*/}
                        {/*    <div className={kcClsx("kcFormOptionsWrapperClass")}>*/}
                        {/*        {realm.resetPasswordAllowed && (*/}
                        {/*            <span>*/}
                        {/*                <a tabIndex={6} href={url.loginResetCredentialsUrl}>*/}
                        {/*                    {msg("doForgotPassword")}*/}
                        {/*                </a>*/}
                        {/*            </span>*/}
                        {/*        )}*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <Group id="kc-form-buttons" justify="flex-end">
                            <Button fullWidth disabled={isLoginButtonDisabled} id="kc-login">
                                {msgStr("doLogIn")}
                            </Button>
                        </Group>

                        {/*<div id="kc-form-buttons" className={kcClsx("kcFormGroupClass")}>*/}
                        {/*<input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />*/}
                        {/*<input*/}
                        {/*    tabIndex={7}*/}
                        {/*    disabled={isLoginButtonDisabled}*/}
                        {/*    className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}*/}
                        {/*    name="login"*/}
                        {/*    id="kc-login"*/}
                        {/*    type="submit"*/}
                        {/*    value={msgStr("doLogIn")}*/}
                        {/*/>*/}
                        {/*</div>*/}
                    </form>
                )}
            </Center>
        </SimpleGrid>
        // </Template>
    );
}

import { jsx, NavLink as MenuLink, Link as A } from "theme-ui";

export function NavLink({ path, label, children, ...rest }) {
    return (
        <NextLink href={path}>
            <MenuLink {...rest}>{children ? children : label}</MenuLink>
        </NextLink>
    );
}
export function Link({ path, label, children, ...rest }) {
    return (
        <A {...rest} href={path}>
            {children ? children : label}
        </A>
    );
}

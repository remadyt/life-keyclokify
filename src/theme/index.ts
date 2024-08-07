import { createTheme } from "@mantine/core";

import { COMPONENTS_CONFIG } from "./components";

export const theme = createTheme({
    components: COMPONENTS_CONFIG,
    fontSizes: {
        xs: "12px",
        sm: "13px",
        md: "14px",
        lg: "16px"
    },
    headings: {
        sizes: {
            h1: {
                fontWeight: "600",
                fontSize: "32px",
                lineHeight: "40px"
            },
            h2: { fontSize: "24px", fontWeight: "500", lineHeight: "36px" },
            h3: { fontSize: "20px", fontWeight: "500", lineHeight: "24px" },
            h4: { fontSize: "16px", fontWeight: "500", lineHeight: "24px" }
        }
    },
    shadows: {
        sm: "var(--box-shadow-sm)"
    }
});

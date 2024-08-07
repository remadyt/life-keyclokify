import "@mantine/core/styles.css";
import type { Preview } from "@storybook/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../src/theme";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        (renderStory: any) => (
            <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
        )
    ]
};

export default preview;

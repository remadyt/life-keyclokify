import {
    ActionIcon,
    Anchor,
    Button,
    Checkbox,
    Combobox,
    Divider,
    Input,
    Loader,
    Menu,
    Modal,
    NumberInput,
    Pagination,
    Pill,
    Popover,
    Radio,
    ScrollArea,
    Table,
    Tabs,
    Text,
    Textarea,
    Tooltip,
    UnstyledButton
} from "@mantine/core";

import classes from "./theme.module.css";

export const COMPONENTS_CONFIG = {
    Checkbox: Checkbox.extend({
        vars: () => {
            return {
                root: {
                    "--checkbox-size-sm": "14px",
                    "--checkbox-color": "var(--color-primary)",
                    "--checkbox-radius": "4px"
                }
            };
        }
    }),
    Text: Text.extend({ classNames: { root: classes.text } }),
    Divider: Divider.extend({ classNames: { root: classes.divider } }),
    Table: Table.extend({
        classNames: { table: classes.table, tr: classes.tableTr, th: classes.tableTh }
    }),
    Button: Button.extend({
        classNames: { root: classes.buttonRoot },
        vars: (_, props) => {
            let styles = {};

            if (props.size === "xs") {
                styles = {
                    "--button-height": "30px"
                };
            }

            if (props.size === "sm") {
                styles = {
                    "--button-height": "32px"
                };
            }

            if (props.size === "md") {
                styles = {
                    "--button-height": "36px"
                };
            }

            if (props.variant === "outline") {
                return {
                    root: {
                        ...styles,
                        "--button-bg": "var(--color-white)",
                        "--button-color": "var(--color-gray)",
                        "--button-hover": "var(--color-gray-4)",
                        border: "var(--border-solid-gray-3)"
                    }
                };
            }

            if (props.variant === "transparent") {
                return {
                    root: {
                        "--button-color": "var(--color-primary)",
                        "--button-bg": "none",
                        "--button-hover": "none"
                    }
                };
            }

            return {
                root: {
                    ...styles,
                    "--button-bg": "var(--color-primary)",
                    "--button-color": "var(--color-white)",
                    "--button-hover": "var(--color-blue)"
                }
            };
        }
    }),
    UnstyledButton: UnstyledButton.extend({
        classNames: { root: classes.unstyledButton }
    }),
    Tabs: Tabs.extend({ classNames: { list: classes.tabsList } }),
    Input: Input.extend({
        defaultProps: { rightSectionProps: { className: classes.inputRightSection } },
        classNames: { input: classes.input, wrapper: classes.inputWrapper }
    }),
    NumberInput: NumberInput.extend({
        classNames: {
            input: classes.numberInput,
            section: classes.numberInputSection,
            label: classes.inputLabel
        },
        defaultProps: { hideControls: true }
    }),
    InputWrapper: Input.Wrapper.extend({
        defaultProps: {
            inputWrapperOrder: ["label", "input", "description", "error"]
        },
        classNames: { label: classes.inputWrapperLabel }
    }),
    ScrollArea: ScrollArea.extend({
        defaultProps: { scrollbarSize: 6 },
        classNames: { scrollbar: classes.scrollbar, thumb: classes.thumb }
    }),
    Tooltip: Tooltip.extend({ classNames: { tooltip: classes.tooltip } }),
    Menu: Menu.extend({
        classNames: {
            itemLabel: classes.itemLabel,
            item: classes.menuItem,
            dropdown: classes.menuDropdown
        }
    }),
    Textarea: Textarea.extend({
        classNames: { input: classes.textarea, label: classes.labelTextarea }
    }),
    Combobox: Combobox.extend({
        classNames: { dropdown: classes.dropdown, option: classes.option },
        defaultProps: { withinPortal: false }
    }),
    Modal: Modal.extend({
        classNames: {
            body: classes.modalBody,
            content: classes.modalContent,
            header: classes.modalHeader,
            inner: classes.modalInner
        }
    }),
    Loader: Loader.extend({
        defaultProps: { type: "dots", color: "var(--color-blue-3)" }
    }),
    ActionIcon: ActionIcon.extend({
        classNames: {
            root: classes.actionIcon
        },
        defaultProps: {
            variant: "transparent",
            loaderProps: { color: "var(--color-blue-3)" }
        }
    }),
    Anchor: Anchor.extend({ classNames: { root: classes.anchor } }),
    Pagination: Pagination.extend({
        classNames: {
            control: classes.paginationControl
        }
    }),
    Notifications: {
        classNames: {
            notification: classes.notification
        }
    },
    Radio: Radio.extend({ defaultProps: { color: "var(--color-primary)" } }),
    Pill: Pill.extend({
        classNames: { root: classes.pillRoot, remove: classes.pillRemoveIcon }
    }),
    Popover: Popover.extend({ defaultProps: { zIndex: "1000" } })
};

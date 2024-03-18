
import prompt from 'react-native-prompt-android';


interface Props {
    title: string,
    message: string,
    buttons: PromptButton[],
    options: PromptOptions
}

interface PromptButton {
    text?: string,
    onPress?: (value: any) => void,
    style?: "cancel" | "default" | "destructive" | undefined
}

interface PromptOptions {
    type: 'default' | 'plain-text' | 'secure-text',
    cancelable: boolean,
    defaultValue: string,
    placeholder: string
}

export const showPrompt = (
    {
        title = 'Title',
        message = 'Message',
        buttons,
        options
    }: Props
) => {
    prompt(
        title,
        message,
        buttons,
        options
    );
}
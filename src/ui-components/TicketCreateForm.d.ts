/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TicketCreateFormInputValues = {
    email?: string;
    ticketType?: string;
    date?: string;
    url?: string;
    owner?: string;
};
export declare type TicketCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    ticketType?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketCreateFormOverridesProps = {
    TicketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    ticketType?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TicketCreateFormProps = React.PropsWithChildren<{
    overrides?: TicketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TicketCreateFormInputValues) => TicketCreateFormInputValues;
    onSuccess?: (fields: TicketCreateFormInputValues) => void;
    onError?: (fields: TicketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketCreateFormInputValues) => TicketCreateFormInputValues;
    onValidate?: TicketCreateFormValidationValues;
} & React.CSSProperties>;
export default function TicketCreateForm(props: TicketCreateFormProps): React.ReactElement;

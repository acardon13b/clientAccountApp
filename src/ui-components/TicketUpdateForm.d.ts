/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Ticket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TicketUpdateFormInputValues = {
    email?: string;
    ticketType?: string;
    date?: string;
    url?: string;
    owner?: string;
};
export declare type TicketUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    ticketType?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketUpdateFormOverridesProps = {
    TicketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    ticketType?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TicketUpdateFormProps = React.PropsWithChildren<{
    overrides?: TicketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ticket?: Ticket;
    onSubmit?: (fields: TicketUpdateFormInputValues) => TicketUpdateFormInputValues;
    onSuccess?: (fields: TicketUpdateFormInputValues) => void;
    onError?: (fields: TicketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketUpdateFormInputValues) => TicketUpdateFormInputValues;
    onValidate?: TicketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TicketUpdateForm(props: TicketUpdateFormProps): React.ReactElement;

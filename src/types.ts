import { StatelessComponent, SyntheticEvent } from 'react';

export interface FieldNode {
    name: string;
    value: string;
    formFieldID: string;
    extraClass: string;
    title: string;
    rightTitle: string;
    leftTitle: string;
    description: string;
    validation: string;
    customValidationMessage: string;
    schemaType: SchemaType;
    source: RawAttribute[];
}
export declare enum SchemaType {
    Integer = "Integer",
    Decimal = "Decimal",
    String = "String",
    Text = "Text",
    Boolean = "Boolean",
    Date = "Date",
    Time = "Date",
    Datetime = "Datetime",
    Hidden = "Hidden",
    Structural = "Structural",
    SingleSelect = "SingleSelect",
    MultiSelect = "MultiSelect"
}
export interface RawFieldNode extends FieldNode {
    attributes: RawAttribute[];
    data: string;
    childFields: RawFieldNode[];
}
export interface NormalisedFieldNode extends FieldNode {
    attributes: NormalisedAttributes;
    data: ArbitraryData;
    childFields: NormalisedFieldNode[];
    Component: StatelessComponent | null;
}
export interface RawAttribute {
    name: string;
    value: string;
}
export interface NormalisedAttributes {
    [name: string]: string;
}
export interface SilverStripeForm {
    formFields: RawFieldNode[];
    formActions: RawFieldNode[];
    attributes: RawAttribute[];
}
export interface FormHash {
    [field: string]: string;
}
export interface ArbitraryData {
    [field: string]: any;
}
export interface FormData {
    fields: NormalisedFieldNode[];
    actions: NormalisedFieldNode[];
    attributes: NormalisedAttributes;
    initialValues: FormHash;
    validator(v: FormHash): FormHash;
}
export interface FormikStub {
    handleChange(e: SyntheticEvent): null;
    handleBlur(e: SyntheticEvent): null;
    values: FormHash;
    errors: FormHash;
    touched: FormHash;
}

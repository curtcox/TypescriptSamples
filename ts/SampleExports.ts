export const exported_number = 42;

export const exported_string_constant = "exported_string_constant";

export function exported_function() {
    return "exported_function";
}

export const exported_function_with_parameters = function (param1: string, param2: number) {
    return param1 + param2;
}

export interface ExportedInterface {
    exported_property: string;
    exported_method(): string;
}

export class ExportedClass {

    exported_property: string;

    constructor() {
        this.exported_property = "exported_property";
    }
    
    exported_method() {
        return "exported_method";
    }
}

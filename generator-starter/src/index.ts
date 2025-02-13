// This library contains other useful functions to assist in creating a generator
// See https://github.com/modiimedia/arri/tree/master/packages/arri-codegen/utils for details
import { defineGeneratorPlugin } from "@arrirpc/codegen-utils";

// if you choose to export this be sure to give it a unique name
interface Options {
    // add or remove fields here to customize options for your generator
    // official client generators all have "clientName" and "outputFile" as options
    clientName: string;
    outputFile: string;
}

export default defineGeneratorPlugin((options: Options) => {
    return {
        options,
        run: async (def, isDevServer) => {
            // generate something using the app definition and the specified options
        },
    };
});

import { Hono } from 'https://deno.land/x/hono@v4.2.9/mod.ts'
import {
    exported_number,
    exported_string_constant,
    exported_function,
    exported_function_with_parameters,
    ExportedClass
} from 'https://raw.githubusercontent.com/curtcox/TypescriptSamples/main/ts/SampleExports.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`
    <table border>
        <tr> <th>thing      </th> <th>example                    </th> </tr>
        <tr> <th>number     </th> <td>${exported_number}         </td> </tr>
        <tr> <th>string     </th> <td>${exported_string_constant}</td> </tr>
        <tr> <th>function   </th> <td>${exported_function()}     </td> </tr>
        <tr> <th>with params</th> <td>${exported_function_with_parameters(6,7)}</td></tr>
        <tr> <th>class      </th> <td>${new ExportedClass()}     </td></tr>
    </table>

    <p>
    <a href="https://github.com/curtcox/TypescriptSamples/blob/main/main.ts">Source for this page.</a>
    <p>
    <a href="https://raw.githubusercontent.com/curtcox/TypescriptSamples/main/ts/SampleExports.ts">URL used in import.</a>
    `)
})

Deno.serve(app.fetch);
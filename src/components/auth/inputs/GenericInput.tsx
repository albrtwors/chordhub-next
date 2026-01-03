import Input from "@/components/form/input/InputFieldOL";
import Label from "@/components/form/Label";

export default function GenericInput(){
    return  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* <!-- username --> */}
                  <div className="sm:col-span-1">
                    <Label>
                      Nombre de usuario<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                    />
                  </div>
            </div>
}
import { useEffect, useState } from "react";
import Label from "../Label";
import Input from "./InputFieldOL";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import * as z from 'zod'
export default function PasswordInput(){
    const [passwordsMatch, setPasswordsMatch] = useState(false)
    const [error, setError] = useState(false)
    const [passwords, setPasswords] = useState({password:'', password_confirmation:''})
    const [showPassword, setShowPassword] = useState(true)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true)
    
    useEffect(()=>{
        if(passwords.password!=passwords.password_confirmation){
            // eslint-disable-next-line
            setError(true)
        }else{
            setError(false)
        }
    },[passwords])

    return <div className="space-y-6">
                <div>
                  <Label>
                   Contraseña <span className="text-error-500">*</span>{" "}
                  </Label>
                
                <div className="relative">
                  <Input zodPattern={z.string().min(7).max(12).regex(/^[A-Za-z]/)} id="password" name="password" hint="La contraseña debe tener de 7-12 caracteres alfanumericos" placeholder="Introduce la contraseña" setPasswords={setPasswords} passwords={passwords} isPassword type={showPassword ?  'text' : 'password'}/>
                         
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                </div>
                </div>
          
                <div className="relative">
                  <Label>
                   Repite la Contraseña <span className="text-error-500">*</span>{" "}
                  </Label>

                  
                  <Input id="password_confirmation" name="password_confirmation"  isPassword passwords={passwords} setPasswords={setPasswords} placeholder="Repite la contraseña" hint="La contraseña debe coincidir con la primera, además debes respetar el mismo formato" type={showPasswordConfirm ? 'text' : 'password'} />
                    <span
                      onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                      className="absolute z-30 mt-3 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPasswordConfirm ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>                  
                </div>
                {/* Optional Hint Text */}
                {error && (
                    <p
                    className={`mt-1.5 text-xs text-error-500
                    }`}
                    >
                    Las contraseñas no coinciden
                    </p>
                )}               
        </div>
}
'use client'
import { User } from "@/share/model/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod";

//Criação do schema Zod para validação de campos
const createUserFormSchema = z.object({
        name: z.string()
            .nonempty("Digite seu nome!")
            .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
                , "Apenas letras são permitidas"),
        cpf: z.string()
            .nonempty("Digite seu CPF")
            .regex(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/, "Digite corretamente o seu CPF"),
        phone: z.string()
            .nonempty("Digite seu Telefone")
            .regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/, "Digite corretamente seu Telefone"),
        email: z.string()
            .nonempty("Digite seu E-mail")
            .email("Digite corretamente seu E-mail"),
        nacionality: z.string()
        .nonempty("Digite sua nacionalidade!")
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Apenas letras são permitidas")
    });
     
    type CreateUserFormSchema = z.infer<typeof createUserFormSchema>;

export interface UserFormProps {
    user: Partial<User>; 
    onChange: (user: Partial<User>) => void;
    save: () => void;
    cancel: () => void;
    delete: () => void;
}

export default function UserForm(props: UserFormProps) {
        const { register, handleSubmit, formState: { errors, isValid } } = useForm<CreateUserFormSchema>({
                resolver: zodResolver(createUserFormSchema), //Passando o schema para o React Hook Form
                mode: "onBlur" //Define a validação no evento de "blur", ou seja, ao perder o perde o foco
        });

        //Verifica se os dados do formulário foram corretamente preenchidos
        const onSubmit = (data: CreateUserFormSchema) => {
                if (isValid || null) {
                        props.onChange(data);
                        props.save();
                } else {
                        <p className="erro">Preencha os dados corretamente!</p>
                }
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)}> {/*Envia os dados validados*/} 
            <div className="flex flex-col gap-5">
                <label>Nome: </label>
                <input type="text" className="inputs" value={props.user.name}
                        {...register("name")}
                        onChange={e => props.onChange({ ...props.user, name: e.target.value})}
                        required
                        minLength={3}
                        maxLength={120}
                        />
                        {errors.name && <p className="erro">{errors.name.message}</p>} {/* Mensagem de erro */}

                <label>CPF: </label>
                <input type="text" className="inputs" value={props.user.cpf}
                        {...register("cpf")}
                        onChange={e => props.onChange({ ...props.user, cpf: e.target.value})}
                        required/>
                        {errors.cpf && <p className="erro">{errors.cpf.message}</p>} 

                <label>Telefone: </label>
                <input type="text" className="inputs" value={props.user.phone}
                        {...register("phone")}
                        onChange={e => props.onChange({ ...props.user, phone: e.target.value})}
                        required/>
                        {errors.phone && <p className="erro">{errors.phone.message}</p>} 

                <label>E-mail: </label>
                <input type="string" className="inputs" value={props.user.email}
                        {...register("email")}
                        onChange={e => props.onChange({ ...props.user, email: e.target.value})}
                        maxLength={120}
                        required/>
                        {errors.email && <p className="erro">{errors.email.message}</p>} 

                <label>Nacionalidade: </label>
                <input type="text" className="inputs" value={props.user.nacionality}
                        {...register("nacionality")}
                        onChange={e => props.onChange({ ...props.user, nacionality: e.target.value})}
                        required/>
                        {errors.nacionality && <p className="erro">{errors.nacionality.message}</p>} 

                <div className="flex justify-between">
                    <div className="flex gap-5">
                        <button type="submit" className="bg-green-500 px-4 py-2 rounded-md">Salvar</button> {/*O formulário já salva os dados, não necessitando adicionar um evento */}
                        <button type="button" className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancel}>Cancelar</button> {/*type="button" necessário para diferenciar os botões na função onSubmit, evitando que eles tenham a mesma função de salvar dados*/}
                    </div>
                    <button type="button" className="bg-red-500 px-4 py-2 rounded-md" onClick={props.delete}>Excluir</button>
                </div>
            </div>
        </form>
    )
}

"use client";
import {
	EyeInvisibleOutlined,
	EyeOutlined,
	LockOutlined,
	UserOutlined,
} from "@ant-design/icons";
import {Input} from "antd";
import Image from "next/image";
import {useRouter } from "next/navigation";
import {useState, FormEvent} from "react";

export default function Auth() {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const router = useRouter();

	function handleLogin(e: FormEvent<HTMLFormElement>) {
		e.preventDefault;

		if (user === process.env.ADMIN_NAME && pass === process.env.ADMIN_PASS) {
			return router.push(
				`/auth/admin?user=${process.env.ADMIN_NAME}&pass=${process.env.ADMIN_PASS}`
			);
		} else {
			alert("Credenciais Inválidas");
		}
	}

	return (
		<section className="flex flex-col items-center h-screen gap-6 py-20">
			<form className="flex flex-col gap-6" onSubmit={e => handleLogin(e)} >
				<Image src="/assets/fullLogo.png" alt="LAMF5" width={360} height={360} className="select-none" />
				<div className="border-b-2 border-white">
					<Input
						size="middle"
						prefix={<UserOutlined className="text-2xl text-white" />}
						placeholder="Usuário"
						bordered={false}
						className="[&>*]:text-white bg-transparent"
						onChange={(e) => setUser(e.target.value)}
					/>
				</div>
				<div className="border-b-2 border-white">
					<Input.Password
						size="middle"
						prefix={<LockOutlined className="text-2xl text-white" />}
						placeholder="Senha"
						bordered={false}
						className="[&>*]:text-white bg-transparent"
						iconRender={(visible) =>
							visible ? (
								<EyeOutlined style={{color: "white"}} />
							) : (
								<EyeInvisibleOutlined style={{color: "white"}} />
							)
						}
						onChange={(e) => setPass(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="w-full p-1 text-white transition-all duration-200 border-2 rounded-md select-none hover:bg-white hover:text-black hover:border-white"
				>
					Entrar
				</button>
			</form>
		</section >
	);
}

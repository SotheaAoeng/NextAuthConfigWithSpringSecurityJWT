"use client";
import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useState} from "react";
import {signIn} from "next-auth/react";

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        user_id: "",
        password: "",
    });
    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/test";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            setFormValues({ user_id: "", password: "" });

            const res = await signIn("credentials", {
                redirect: false,
                user_id: formValues.user_id,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false);

            console.log(res);
            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError("invalid user id or password");
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const input_style = "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300";
    return (
        <div className="flex h-screen">
            {/*Left Pane*/}
            <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                <div className="max-w-md text-center">
                    <>
                        <img width="" height="" className="" src="/images/Online-world-amico.png" alt="ME REAN KH"/>
                    </>
                </div>
            </div>
            {/*Right Pane*/}
            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">លក់ដូងទុំ</h1>
                    <form onSubmit={onSubmit} className="space-y-4">
                        {error && (
                            <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
                        )}
                        <div>
                            <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">User
                                ID</label>
                            <input
                                required
                                type="email"
                                name="user_id"
                                value={formValues.user_id}
                                onChange={handleChange}
                                placeholder="User id"
                                className={`${input_style}`}
                            />
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                required
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className={`${input_style}`}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                style={{backgroundColor: `${loading ? "#ccc" : "#9b52ff"}`}}
                                className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                                disabled={loading}
                            >
                                {loading ? "loading..." : "Sign In"}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>Don't have account? <a href="" className="text-black hover:underline">Sign Up here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm
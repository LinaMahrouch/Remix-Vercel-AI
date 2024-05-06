import { MetaFunction } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';
import { useChat } from 'ai/react';
import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const meta: MetaFunction = () => {
    return [
        { title: 'Remix Vercel AI' },
        { name: 'description', content: 'Remix-Llama3 on GROQ with Vercel AI SDK and Remix' },
    ];
};

export default function Index() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <div className="flex flex-col h-screen ">
            <header className="flex items-center justify-between bg-zinc-900 px-4 py-4 text-white">
                <h1 className="text-2xl  font-medium">Llama3 on GROQ with Vercel AI SDK, Made with Remix 💿 </h1>
                <div className="flex items-center gap-2">
                <Link to="/repo-url" className="text-black no-underline">
                    <Button variant="outline" className='text-black'  >
                        <GithubIcon className="mr-4 bg-black" /> Clone this repo
                    </Button>
                    </Link>
                </div>
            </header>
            <main className="flex-1 overflow-auto p-4 m-3">
                {messages.map((m, index) => (
                    <div key={index} className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[75%] rounded-lg p-3 ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-zinc-700'}`}>
                            <p className="text-sm">{m.content}</p>
                        </div>
                    </div>
                ))}
            </main>
            <div className="flex items-center gap-2 border-t bg-white px-4 py-3 m-4 dark:bg-gray-950">
                <Form onSubmit={handleSubmit} className="w-full flex">
                    <Input className="flex-1 mr-2" placeholder="Type your message..." value={input} onChange={handleInputChange} />
                    <Button type="submit" >Send</Button>
                </Form>
            </div>
        </div>
    );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 72 72">
            <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
        </svg>
    );
}

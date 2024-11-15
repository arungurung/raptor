import type { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = [
    "Arun",
    "Raj",
    "Nikhil",
    "Praveen",
    "Rahul",
    "Vivek",
    "Harshit",
    "Kunal",
    "Abhishek",
    "Akash",
    "Aniket",
];
interface Data {
    query: string;
    results: string[];
}

export const handler: Handlers<Data> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get("q") || "";
        const results = NAMES.filter((name) => name.includes(query));
        return ctx.render({ results, query });
    },
};

export default function Page({ data }: PageProps<Data>) {
    const { query, results } = data;

    return (
        <div>
            <form>
                <input type="text" name="q" value={query} />
                <button type="submit">Search</button>
            </form>

            <ul>
                {results.map((name) => <li key={name}>{name}</li>)}
            </ul>
        </div>
    );
}

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const response = await ctx.render();
        response.headers.set("X-Custom-Header", "Hello");
        return response;
    },
};

const AboutPage = () => {
    return (
        <main>
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
    );
};

export default AboutPage;

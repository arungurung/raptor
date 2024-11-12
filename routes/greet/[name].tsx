import { PageProps } from "$fresh/server.ts";

const Greet = (props: PageProps) => {
  const {name} = props.params;

  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  )
};

export default Greet;

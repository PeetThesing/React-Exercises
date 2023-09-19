import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Character() {
  const { data, error, isLoading } = useSWR(
    "https://swapi.dev/api/people/1",
    fetcher
  );

  if (error) return <div>oooops- ERROR</div>;
  if (isLoading) return <div>loading...</div>;

  const id = 1;

  console.log("All the data", data);

  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}

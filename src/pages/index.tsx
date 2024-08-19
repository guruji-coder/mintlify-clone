import useStore from "../lib/store";

export default function Home() {
    const { isMobile } = useStore();

    if (isMobile) {
        return <h1>Mobile</h1>;
    }
    return <h1>Laptop</h1>;
}

import Link from "next/link";
import styled from "styled-components";

export default function FourOhFour() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        height: "100%",
        width: "100%",
        padding: "0 0.5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "600" }}>
        404! - Page Not Found!
      </h1>
      <Link href="/">
        <a style={{ fontSize: "1.2rem" }}>Go back home</a>
      </Link>
    </div>
  );
}

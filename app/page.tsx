export default function Home() {
  return (
    <main>

      {/* HERO VIDEO SECTION */}
      <section style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden"
      }}>
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "4rem" }}>ART IN MOTION</h1>
          <p>Aesthetic • Paintings • 3D Creations</p>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section style={{
        height: "100vh",
        background: "#0a0a0a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h2>Explore the Collection</h2>
      </section>

    </main>
  )
}

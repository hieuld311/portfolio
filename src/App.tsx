import {
  Header,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Footer,
  Certifications,
} from "./components/index";
import { androidProfile } from "./data/androidProfile";

function App() {
  const profile = androidProfile;

  return (
    <main className="container">
      <Header name="Lê Đình Hiếu" role={profile.role} />

      <About summary={profile.summary} />

      <Education education={profile.education} />

      <Skills skills={profile.skills} />

      {profile.experience && profile.experience.length > 0 && (
        <Experience experience={profile.experience} />
      )}

      <Projects projects={profile.projects} />

      {profile.certifications && profile.certifications.length > 0 && (
        <Certifications certifications={profile.certifications} />
      )}

      <Footer contact={profile.contact} />
    </main>
  );
}

export default App;

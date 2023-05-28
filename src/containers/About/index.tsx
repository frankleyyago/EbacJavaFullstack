import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam
      perferendis! Dolor voluptatibus ex quaerat iusto sapiente quas, quidem
      doloribus praesentium soluta, recusandae velit. At quibusdam quo
      consequuntur ea culpa.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=frankleyyago&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=frankleyyago&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Pro, M2, 16GB RAM (2022)">
            I was using an M1 13” MacBook Air prior to this and the
            difference is night and day.
          </Tool>
          <Tool title="Nuphy Air75 V2">
            Love the tactile and audiofeeback on this keyboard, and the low profile keycaps. 
          </Tool>
          <Tool title="Satechi M1">
            Simple minimalistic ambidextereous wireless mouth that goes in hand with my macbook design. also has the same space gray colour. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor">
            I was using VS Code before that, but having the ability to prompt LLMs rigth from the code or have the access to the codebase is big game changer for productivity.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="Warp.dev">
            This is what I use when I need some more help with the commands 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Favorite Design and whiteboard tool. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            I was using Alfred before that, but I have made the switch to Raycast recently and I have been absolutely loving it.
          </Tool>
          <Tool title="Obsidian">
            Note taking system
          </Tool>
          <Tool title="Session">
            My pomodoro timer helping me tracking my deep work hours
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

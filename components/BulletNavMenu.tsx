import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"

const BULLET = () => (
  <div className="inline-block w-3 h-3 text-blue-800 border-current border-solid rounded-full fill-current border-[1px] mx-4">
    <RightArrow />
  </div>
)
export function BulletNavMenu(): JSX.Element {
  return (
    <div className="flex flex-col pt-4 md:space-x-16 md:flex-row md:pt-0">
      <ul>
        <li>
          <BULLET />
          <a href="/res/high-speed-cable/">High Speed Cable</a>
        </li>
        <li>
          <BULLET />
          <a href="/res/wireless-broadband/">Wireless Broadband</a>
        </li>
        <li>
          <BULLET />
          <a href="/res/high-speed-dsl/">High Speed DSL</a>
        </li>
      </ul>
      <ul>
        <li>
          <BULLET />
          <a href="/res/voip/">VoIP</a>
        </li>
        <li>
          <BULLET />
          <a href="/res/mail/">Mail</a>
        </li>
        <li>
          <BULLET />
          <a href="/res/dial-up/">Dial Up</a>
        </li>
      </ul>
    </div>
  )
}

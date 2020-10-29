import React, { useState } from "react"
import { css } from "@emotion/core"
import { useSpring, animated } from "react-spring"

const Flashcard = ({ title, front, back }) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 200, friction: 80 },
  })

  const handleClick = () => set(state => !state)

  return (
    <div
      role="button"
      className="flashcard-base"
      onClick={handleClick}
      onKeyDown={handleClick}
      tabindex="0"
    >
      <animated.div
        className="card flashcard"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      >
        <h3 className="card-title">{title}</h3>
        <div className="card-body">
          <h5>
            <b>Question:</b> {front}
          </h5>
        </div>
      </animated.div>

      <animated.div
        className="card flashcard"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(540deg)`),
        }}
      >
        <h3
          className="card-title"
          css={css`
            padding: 10px;
            border-bottom: 1px solid #348064;
          `}
        >
          {title}
        </h3>
        <section
          className="card-body"
          dangerouslySetInnerHTML={{ __html: back }}
          itemProp="articleBody"
        />
      </animated.div>
    </div>
  )
}

export default Flashcard

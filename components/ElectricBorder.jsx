"use client"

import { useEffect, useId, useLayoutEffect, useRef } from "react"

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`
  let normalized = hex.replace("#", "")
  if (normalized.length === 3) {
    normalized = normalized
      .split("")
      .map((char) => char + char)
      .join("")
  }
  const value = parseInt(normalized, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const ElectricBorder = ({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 1,
  thickness = 2,
  className,
  style,
}) => {
  const rawId = useId().replace(/[:]/g, "")
  const filterId = `turbulent-displace-${rawId}`
  const svgRef = useRef(null)
  const rootRef = useRef(null)
  const strokeRef = useRef(null)

  const updateAnim = () => {
    const svg = svgRef.current
    const host = rootRef.current
    if (!svg || !host) return

    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`
    }

    const rect = host.getBoundingClientRect()
    const width = Math.max(
      1,
      Math.round(host.clientWidth || rect.width || 0),
    )
    const height = Math.max(
      1,
      Math.round(host.clientHeight || rect.height || 0),
    )

    const dyAnims = Array.from(
      svg.querySelectorAll('feOffset > animate[attributeName="dy"]'),
    )
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute("values", `${height}; 0`)
      dyAnims[1].setAttribute("values", `0; -${height}`)
    }

    const dxAnims = Array.from(
      svg.querySelectorAll('feOffset > animate[attributeName="dx"]'),
    )
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute("values", `${width}; 0`)
      dxAnims[1].setAttribute("values", `0; -${width}`)
    }

    const baseDur = 6
    const dur = Math.max(0.001, baseDur / (speed || 1))
    ;[...dyAnims, ...dxAnims].forEach((anim) =>
      anim.setAttribute("dur", `${dur}s`),
    )

    const disp = svg.querySelector("feDisplacementMap")
    if (disp) {
      disp.setAttribute("scale", String(30 * (chaos || 1)))
    }

    const escapedId =
      typeof CSS !== "undefined" && CSS.escape
        ? CSS.escape(filterId)
        : filterId
    const filterEl = svg.querySelector(`#${escapedId}`)
    if (filterEl) {
      filterEl.setAttribute("x", "-200%")
      filterEl.setAttribute("y", "-200%")
      filterEl.setAttribute("width", "500%")
      filterEl.setAttribute("height", "500%")
    }

    requestAnimationFrame(() => {
      ;[...dyAnims, ...dxAnims].forEach((anim) => {
        if (typeof anim.beginElement === "function") {
          try {
            anim.beginElement()
          } catch {
            console.warn("ElectricBorder: beginElement failed")
          }
        }
      })
    })
  }

  useEffect(() => {
    updateAnim()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, chaos])

  useLayoutEffect(() => {
    if (!rootRef.current) return
    const observer = new ResizeObserver(() => updateAnim())
    observer.observe(rootRef.current)
    updateAnim()
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const inheritRadius = {
    borderRadius: style?.borderRadius ?? "inherit",
  }

  const strokeStyle = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
  }

  const glow1Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: hexToRgba(color, 0.6),
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5,
  }

  const glow2Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5,
  }

  const bgGlowStyle = {
    ...inheritRadius,
    transform: "scale(1.08)",
    filter: "blur(32px)",
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`,
  }

  return (
    <div ref={rootRef} className={`relative isolate ${className ?? ""}`} style={style}>
      <svg
        ref={svgRef}
        className="pointer-events-none fixed -left-[10000px] -top-[10000px] h-[10px] w-[10px] opacity-[0.001]"
        aria-hidden
        focusable="false"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="2"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="2"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10" style={inheritRadius}>
        <div ref={strokeRef} className="absolute inset-0 box-border" style={strokeStyle} />
        <div className="absolute inset-0 box-border" style={glow1Style} />
        <div className="absolute inset-0 box-border" style={glow2Style} />
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>

      <div className="relative z-0 h-full" style={inheritRadius}>
        {children}
      </div>
    </div>
  )
}

export default ElectricBorder

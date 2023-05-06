import React from 'react'
import './starRating.css'

const Star = ({ starClass }) => (
  <div className={starClass}>
    <svg
      id="star"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2482 5010 c-66 -14 -132 -50 -184 -101 -41 -41 -85 -123 -346 -651
        -248 -501 -304 -608 -331 -627 -35 -25 -24 -24 -921 -154 -486 -71 -511 -78
        -595 -162 -26 -25 -59 -72 -73 -103 -24 -50 -27 -69 -27 -162 0 -172 -22 -143
        536 -688 263 -257 486 -481 494 -499 8 -17 15 -44 15 -59 0 -15 -48 -305 -106
        -643 -119 -690 -124 -738 -81 -834 32 -70 118 -160 181 -187 97 -41 219 -44
        306 -7 19 8 284 145 588 305 304 160 568 295 587 301 22 6 48 6 70 0 19 -6
        291 -145 605 -310 381 -200 590 -305 631 -315 167 -43 353 51 427 216 41 92
        36 144 -82 830 -58 338 -106 628 -106 643 0 16 7 43 15 60 8 18 231 242 494
        499 548 534 532 515 539 672 3 75 0 101 -17 148 -41 107 -125 188 -230 222
        -25 8 -329 56 -676 106 -499 72 -639 96 -675 113 l-45 22 -300 601 c-165 331
        -313 619 -329 639 -31 40 -111 95 -164 113 -48 17 -150 22 -200 12z"
        />
      </g>
    </svg>
  </div>
)

export const StarRating = ({ rated, count }) => {
  return (
    <div className="star-rating">
      {[...Array(count).keys()].map((key) => {
        const currentKey = key + 1
        return <Star starClass={currentKey <= rated ? 'gold' : 'grey'} />
      })}
    </div>
  )
}

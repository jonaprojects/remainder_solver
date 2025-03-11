import React, { useRef, useEffect } from "react";

import Navbar from "@/components/navbar/Navbar";
import classes from "../styles/Background.module.css";
import Header from "@/components/header/Header";
import Quote from "@/components/quote/Quote";
import { InlineMath } from "react-katex";

import renderMathInElement from "katex/dist/contrib/auto-render.js";
import "katex/dist/katex.min.css";

export default function Background() {
  const katexTextRef = useRef();

  useEffect(() => {
    if (katexTextRef.current) {
      renderMathInElement(katexTextRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
      });
    }
  }, []);

  return (
    <div ref={katexTextRef}>
      <Navbar />
      <Header
        title={"Background"}
        subtitle={"A brief introduction to the Chinese Remainder Theorem"}
        imageUrl={"/headerBg2.png"}
      />
      <main className={classes.container}>
        <div className={classes.contentContainer}>
          <h1>History</h1>
          <p className={classes.par}>
            The Chinese Remainder Theorem (CRT) first appeared in the writings
            of the Sun-Zi, a notable mathematician from ancient china. The
            problem was introduced in his book &quot;Sun Zi Suanjing&quot;. Most
            of the problems that he tackled in his book were already known, but
            the remainder problem was a complete novelty for that time. In his
            book, he outlined the problem in the following way:
          </p>
          <Quote
            quote={`Now there are an unknown number of things. If we count by threes,
          there is a remainder 2; if we count by fives, there is a remainder 3;
          if we count by sevens, there is a remainder 2. Find the number of
          things`}
            description={"Sun Zi, Around 3CE"}
          />
          <p className={classes.par}>
            Sun-Zi showed an example of a solution to these kinds of problems,
            but did not provide any formal proof or algorithm, like we would
            expect in accordance to today's mathematical standards and notation.
            In fact, a complete proof for the problem would only come a thousand
            years after Sun-Zi originally presented it.
          </p>

          <p className={classes.par}>
            Sun Zi probably had no idea just how influential would this problem
            be, even after more than 2000 years. The chinese remainder theorem
            has applications in a variety of fields, from cryptography to even
            modern radar-systems, as we are going to see shortly.
          </p>
          <p className={classes.par}>
            A more general algorithm to the solution to this problem arrived
            from the ancient Indian mathematician AryaBhata in the 6th century.
            Let <InlineMath math={"x, y"} /> be positive integers, and{" "}
            <InlineMath math={"a, b, c"} /> be integers such that{" "}
            <InlineMath math={"a \\geq b"} /> and <InlineMath math={"a"} /> and{" "}
            <InlineMath math={"b"} /> are coprimes.
          </p>
          <span></span>
          <h1>Formal Theorem</h1>
          <h1>Proof</h1>
          <h1>Applications</h1>
        </div>
      </main>
    </div>
  );
}

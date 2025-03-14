import React from "react";
import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";
import classes from "../styles/Background.module.css";
import Header from "@/components/header/Header";
import Quote from "@/components/quote/Quote";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Background() {
  const config = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
      processEscapes: true,
      processEnvironments: true,
    },
    startup: {
      typeset: true,
    },
    options: {
      enableMenu: false, // Disable the right-click menu for cleaner UI
    },
  };
  const equation = `
    \\[
    \\begin{aligned}
    X &\\equiv 1000 \\pmod{\\frac{1096}{3}} \\\\
    X &\\equiv 41 \\pmod{\\frac{137}{5}} \\\\
    X &\\equiv 315 \\pmod{185} \\\\
    X &\\equiv 1000 \\pmod{\\frac{1096}{13}} \\\\
    X &\\equiv 1000 \\pmod{\\frac{10960}{3}} \\\\
    X &\\equiv 1000 \\pmod{10960}
    \\end{aligned}
    \\]
  `;
  const equation2 = ` \\[
  x \\equiv \\left( \\frac{b}{a} \\right) \\mod \\left( \\frac{c}{a} \\right)
\\]`;

  return (
    <MathJaxContext config={config}>
      <div>
        <Navbar />
        <Header
          title={"Background"}
          subtitle={"A brief introduction to the Chinese Remainder Theorem"}
          imageUrl={"/headerBg2.png"}
        />
        <main className={classes.container}>
          <div className={classes.contentContainer}>
            <h1 className={classes.h1}>History</h1>
            <h2 className={classes.h2}>Origins</h2>
            <p className={classes.par}>
              The Chinese Remainder Theorem (CRT) first appeared in the writings
              of Sun-Zi, a notable mathematician from ancient China. The problem
              was introduced in his book &quot;Sun Zi Suanjing&quot;. Most of
              the problems he tackled were already known, but the remainder
              problem was a complete novelty at that time. In his book, he
              outlined the problem in the following way:
            </p>
            <Quote
              quote={`Now there are an unknown number of things. If we count by threes,
          there is a remainder 2; if we count by fives, there is a remainder 3;
          if we count by sevens, there is a remainder 2. Find the number of
          things.`}
              description={"Sun Zi, Around 3CE"}
            />
            <p className={classes.par}>
              Sun-Zi showed an example of a solution to these kinds of problems
              but did not provide any formal proof or algorithm, as we would
              expect according to today's mathematical standards and notation.
              In fact, a complete proof for the problem only came a thousand
              years after Sun-Zi originally presented it.
            </p>
            <p className={classes.par}>
              Sun Zi probably had no idea how influential this problem would be,
              even after more than 2000 years. The Chinese Remainder Theorem has
              applications in a variety of fields, from cryptography to even
              modern radar systems, as we will see shortly.
            </p>
            <p className={classes.par}>
              A more general algorithm for solving this problem came from the
              ancient Indian mathematician Aryabhata in the 6th century. Let{" "}
              <MathJax inline>{"$ x, y $"}</MathJax> be positive integers, and{" "}
              <MathJax inline>{"$ a, b, c $"}</MathJax> integers, such that{" "}
              <MathJax inline>{"$a$"}</MathJax> and{" "}
              <MathJax inline>{"$b$"}</MathJax> are coprimes, that is - their
              greatest common denominator is 1.
            </p>
            <h2 className={classes.h2}>Ancient India</h2>
            <p className={classes.par}>The solution to the equation:</p>
            <MathJax>{"\\[ ax + c = by \\]"} </MathJax>
            <p className={classes.par}>
              is referred to as <span className={classes.italic}>Kuttaka</span>{" "}
              by Indian mathematicians. According to legend, mathematician
              Aryabhata was tasked with finding the integer
              <MathJax inline>{"$N$"}</MathJax> such that when divided by an
              integer <MathJax inline>{"$a$"}</MathJax>, it leaves a remainder
              <MathJax inline>{"$r_1$"}</MathJax>, and when divided by an
              integer
              <MathJax inline>{"$b$"}</MathJax>, it leaves a remainder
              <MathJax inline>{"$r_2$"}</MathJax>.
            </p>
            <p className={classes.par}>
              We can formalize this in the following way:
            </p>
            <MathJax>
              {
                "\\[ \\begin{aligned} N &\\equiv r_1 \\pmod{a} \\\\ N &\\equiv r_2 \\pmod{b} \\end{aligned} \\]"
              }
            </MathJax>
            <p className={classes.par}>
              And therefore there exist integers x and y and such that:
            </p>
            <MathJax>\[ N = ax + r_1 \] \[ N = by + r_2 \]</MathJax>
            So from this set of equations we get that
            <MathJax> \[ax + r_1 = by + r_2 \]</MathJax>
            And if we denote
            <MathJax>\[ c = r_1 - r_2 \]</MathJax>
            We get <MathJax>\[ ax+c = by \]</MathJax>
            Which is exactly the original Kuttaka problem we have seen earlier.
            <p className={classes.par}>
              Indian mathematicians studied the aforementioned Kuttaka problem
              extensively and utilized remainders to express different questions
              in a variety of disciplines.
            </p>
            <p className={classes.par}>
              For instance, one of the most fascinating applications was in
              Astronomy. The ancient Indian mathematicians asked to study the
              movement of celestial bodies and predict their locations after a
              certain period of time, (which they often expressed as "kalpa")
            </p>
            <p className={classes.par}>
              <strong>For example:</strong> After completing their full
              revolutions, the Sun, Moon, Mars, etc., have moved for the
              following number of days:
            </p>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Moon</th>
                  <th>Mars</th>
                  <th>Mercury</th>
                  <th>Jupiter</th>
                  <th>Saturn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000</td>
                  <td>41</td>
                  <td>315</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
            <p className={classes.par}>
              So the problem can be outlined in the following manner: Given that
              the Sun completes 3 revolutions in 1096 days, the Moon 5
              revolutions in 137 days, Mars 1 revolution in 185 days, Mercury 13
              revolutions in 1096 days, Jupiter 3 revolutions in 10,960 days,
              and Saturn 1 revolution in 10,960 days, determine the number of
              days that have passed since the beginning of the Kalpa.
              (Brahmagupta, XVIII, sl 7-8, 6281)
            </p>
            <p>
              To find the number of days, we can express an appropriate system
              of congruences.
            </p>
            <MathJax>{equation}</MathJax>
            <p className={classes.par}>
              In 1247, the chinese mathematician{" "}
              <span className={classes.italic}>Qin Jiushaq</span> published his
              work <span className={classes.italic}>Shu shufiu zhang</span>. In
              his work, he elaborated extensively on congruences of first
              degree, that is, equations of the form:
            </p>
            <MathJax>\[ ax = b \mod n \]</MathJax>
            <p className={classes.par}>
              He also worked on simplifying and solving congruence equations
              with decimals and fractions. He believed that the equation
            </p>
            <MathJax>{equation2}</MathJax>
            is equivalent to the (more simple) equation:
            <MathJax>\[ ax = b \mod c \]</MathJax>
            (where a divides b and c of course)
            <p className={classes.par}>
              Qin Jiushao's work on congruence equations is often accredited as
              the first complete proof of the Chinese Remainder Theorem.
            </p>
            <h2 className={classes.h2}>Relevant works</h2>
            <p className={classes.par}>
              Not known to many, Some of the most known names in mathematics
              actually came across the remainder problem. In 1202, the Italian
              mathematician Leonardo Fibonacci published his book "Liber Abaci",
              which was one of the first western books to use the Hindu-Arabic
              numeral system.
            </p>
            <p className={classes.par}>
              In fact, it is even considered by some to be one of the most
              influential books in mathematics, since it played a pivotal role
              in the introduction of new ideas to Western mathematics, and even
              paved the way for the numeral system we use every day.
            </p>
            <p className={classes.par}>
              Fibonacci also wrote about a variety of mathematical topics,
              mainly in number theory and Euclidean geometry.
            </p>
            <p className={classes.par}>
              Among them, was the chinese remainder theorem. However, Fibonacci
              did not provide any explanation on how to solve it, and one might
              even claim his work was relavitely superficial in today's
              standards. (LIBBRECHT, Op, cit. p. 240)
            </p>
            <p className={classes.par}>
              It's also worth to mention that the famous{" "}
              <span className={classes.italic}>Fibonacci sequence</span> was
              described in <span className={classes.italic}>Liber Abaci</span>{" "}
              (even though it originated before fibonacci).
            </p>
            <p>
              In the 18th century, some of the greatest mathematicians in
              history worked on the remainder problems: Leonard Euler
              (1707-1783), Joseph-Louis Lagrange(1736-1813) and Carl Friedrich
              Gauss (1777-1855). They managed to prove pivotal theorems and
              develop algorithms for the solving congruences.
            </p>
            <p className={classes.par}>
              In particular, Gauss had a significant impact in Number Theory. In
              1801, he published his textbook
              <span className={classes.italic}>
                Disquisitiones Arithmeticae
              </span>
              , (In English: Arithmetical Investigations). The book is still
              considered revolutionary by many, who suggest it paved the way for
              the modern Number Thoery.
            </p>
            <p className={classes.par}>
              In the first two chapters of the book, Gauss wrote extensively
              about congruences. Throughout the book, he also cited and
              described the works of other prominent mathematicians, such as
              Lagrange, Euler and Fermat, and managed to prove some of the most
              important theorems in Number Theory today.
            </p>
            <p>
              For instance, he proved that any integer greater than 1 can be
              expressed as a unique multiplication of its prime factors. Due to
              its significance, it is often referred to as "The Fundamental
              Theorem Of Arithmetic"
            </p>
            <h1 className={classes.h1}>Formal Theorem</h1>
            <div className="theorem-content">
              <p>
                Let <MathJax inline>{"$n_1, n_2, \\dots, n_k$"}</MathJax> be
                pairwise coprime positive integers, meaning that{" "}
                <MathJax inline>{"$\\gcd(n_i, n_j) = 1$"}</MathJax> for all{" "}
                <MathJax inline>{"$i \\neq j$"}</MathJax>.
              </p>
              <p>
                For any given integers{" "}
                <MathJax inline>{"$a_1, a_2, \\dots, a_k$"}</MathJax>, the
                system of congruences:
              </p>
              <MathJax>
                {`$$
          \\begin{cases}
          x \\equiv a_1 \\pmod{n_1} \\\\
          x \\equiv a_2 \\pmod{n_2} \\\\
          \\vdots \\\\
          x \\equiv a_k \\pmod{n_k}
          \\end{cases}
          $$`}
              </MathJax>
              <p>
                has a unique solution modulo{" "}
                <MathJax inline>{"$N = n_1 n_2 \\dots n_k$"}</MathJax>.
              </p>
              <p>
                That is, there exists a unique integer{" "}
                <MathJax inline>{"$x$"}</MathJax> such that:
              </p>
              <MathJax>
                {`$$
          0 \\leq x < N \\quad \\text{and} \\quad x \\equiv a_i \\pmod{n_i} \\text{ for each } i = 1, 2, \\dots, k.
          $$`}
              </MathJax>
            </div>
            <h1>Proof</h1>
            <h1>Applications</h1>
          </div>
        </main>
      </div>
    </MathJaxContext>
  );
}

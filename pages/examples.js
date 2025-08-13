import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import classes from "../styles/Background.module.css";
import P from "@/components/typography/P/P";
import H1 from "@/components/typography/Headers/H1";
import H2 from "@/components/typography/Headers/H2";
import H3 from "@/components/typography/Headers/H3";

export default function ExamplesPage() {
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
      enableMenu: false,
    },
  };

  return (
    <MathJaxContext config={config}>
      <div>
        <Navbar />

        <Header
          title={"Examples"}
          subtitle={
            "Illustrations of modular systems and the Chinese Remainder Theorem"
          }
          imageUrl={"/headerBg2.png"}
        />

        <main className={classes.container}>
          <div className={classes.contentContainer}>
            <H1>Guided Practice</H1>
            <P>
              In this section, we examine a few illustrative examples of modular
              systems and demonstrate the application of the Chinese Remainder
              Theorem (CRT). These examples are intended to clarify the
              procedure for solving systems of congruences and to highlight the
              elegance and utility of the CRT in number theory.
            </P>

            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                margin: "24px 0",
                maxWidth: "100%", // Add this
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Z7ljaV7Pzog"
                title="Chinese Remainder Theorem - Numberphile"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>

            <H1>Solving a system - step by step</H1>
            <P>
              Consider the following system of congruences:
              <MathJax>{`\\[
    \\begin{cases}
      2X \\equiv 1 \\pmod{5} \\\\
      3X \\equiv 5 \\pmod{11} \\\\
      X \\equiv 2 \\pmod{3}
    \\end{cases}
  \\]`}</MathJax>
            </P>

            <H2>Verifying the CRT Conditions</H2>
            <P>
              The CRT ensures that a unique solution exists modulo{" "}
              <MathJax inline>{"$M=\\prod m_i$"}</MathJax> provided that the
              moduli are pairwise coprime. In our example, the moduli are{" "}
              <MathJax inline>{"$5, 11, 3$"}</MathJax> , and indeed
              <MathJax>{`\\[ \\gcd(5,11) = \\gcd(5,3) = \\gcd(11,3) = 1 \\]`}</MathJax>
              , confirming the existence of a unique solution modulo{" "}
              <MathJax inline>{"$M = 5 \\cdot 11 \\cdot 3 = 165$"}</MathJax> .
            </P>

            <H2>Reducing Congruences to Standard Form</H2>
            <P>
              When a congruence has a coefficient other than one on the unknown,
              it is necessary to divide by this coefficient using its modular
              inverse. Such an inverse exists whenever the coefficient is
              coprime with the modulus.
            </P>

            <H3>First Congruence</H3>
            <P>
              The congruence
              <MathJax>{`\\[2X \\equiv 1 \\pmod{5} \\]`}</MathJax> can be solved
              by multiplying both sides by the inverse of 2 modulo 5, which is 3
              since <MathJax inline>{"$2 \\cdot 3 = 6 \\equiv 1$"}</MathJax>{" "}
              (mod 5). Thus, we obtain
              <MathJax>{`\\[X \\equiv 3 \\pmod{5} \\]`}</MathJax> .
            </P>

            <H3>Second Congruence</H3>
            <P>
              Similarly, for
              <MathJax>{`\\[3X \\equiv 5 \\pmod{11} \\]`}</MathJax> the inverse
              of 3 modulo 11 is 4, since{" "}
              <MathJax inline>{"$3 \\cdot 4 = 12 \\equiv 1$"}</MathJax> (mod
              11). Multiplying through yields
              <MathJax>{`\\[X \\equiv 9 \\pmod{11} \\]`}</MathJax> .
            </P>

            <H3>Third Congruence</H3>
            <P>
              The third congruence is already in standard form:
              <MathJax>{`\\[X \\equiv 2 \\pmod{3} \\]`}</MathJax> .
            </P>

            <P>
              Hence, the system is equivalent to
              <MathJax>{`\\[ \\begin{cases} X \\equiv 3 \\pmod{5} \\\\ X \\equiv 9 \\pmod{11} \\\\ X \\equiv 2 \\pmod{3} \\end{cases} \\]`}</MathJax>{" "}
              .
            </P>

            <H2>Setting Up the CRT Parameters</H2>
            <P>
              Let <MathJax inline>{"$M = 5 \\cdot 11 \\cdot 3 = 165$"}</MathJax>{" "}
              , with <MathJax inline>{"$M_1 = 33$"}</MathJax> ,{" "}
              <MathJax inline>{"$M_2 = 15$"}</MathJax> , and{" "}
              <MathJax inline>{"$M_3 = 55$"}</MathJax> . We seek integers{" "}
              <MathJax inline>{"$y_i$"}</MathJax> satisfying{" "}
              <MathJax inline>{"$M_i y_i \\equiv 1 \\pmod{m_i}$"}</MathJax> .
            </P>

            <P>
              Calculating each: <MathJax inline>{"$y_1 = 2$"}</MathJax> ,{" "}
              <MathJax inline>{"$y_2 = 3$"}</MathJax> , and{" "}
              <MathJax inline>{"$y_3 = 1$"}</MathJax> , as one can verify
              directly.
            </P>

            <H2>Constructing the Solution</H2>
            <P>
              The general formula provided by the CRT is
              <MathJax>{`\\[ X \\equiv a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3 \\pmod{M} \\]`}</MathJax>{" "}
              . Substituting our values,
              <MathJax>{`\\[
X \\equiv 3 \\cdot 33 \\cdot 2 \\\\
\\quad + 9 \\cdot 15 \\cdot 3 \\\\
\\quad + 2 \\cdot 55 \\cdot 1
\\]`}</MathJax>
              <MathJax>{`\\[
X \\equiv 713 \\equiv 53 \\pmod{165}
\\]`}</MathJax>{" "}
              .
            </P>

            <H2>Final Solution</H2>
            <P>
              Therefore,
              <MathJax inline>
                {"$\\boxed{X \\equiv 53 \\pmod{165}}$"}
              </MathJax>{" "}
              , which can also be expressed as{" "}
              <MathJax inline>{"$X = 53 + 165k$"}</MathJax> for{" "}
              <MathJax inline>{"$k \\in \\mathbb{Z}$"}</MathJax> .
            </P>

            <H2>Verification</H2>
            <P>
              Checking the original congruences:{" "}
              <MathJax inline>{"$2 \\cdot 53 = 106 \\equiv 1$"}</MathJax> (mod
              5), <MathJax inline>{"$3 \\cdot 53 = 159 \\equiv 5$"}</MathJax>{" "}
              (mod 11), and <MathJax inline>{"$53 \\equiv 2$"}</MathJax> (mod
              3). Each congruence is satisfied.
            </P>

            <H2>Computing Modular Inverses</H2>
            <P>
              A modular inverse of an integer <MathJax inline>{"$a$"}</MathJax>{" "}
              modulo <MathJax inline>{"$m$"}</MathJax> is an integer{" "}
              <MathJax inline>{"$a^{-1}$"}</MathJax> such that{" "}
              <MathJax inline>{"$a a^{-1} \\equiv 1 \\pmod{m}$"}</MathJax> .
              Such an inverse exists precisely when{" "}
              <MathJax inline>{"$\\gcd(a,m)=1$"}</MathJax> .
            </P>

            <P>
              The extended Euclidean algorithm provides an efficient method for
              computing inverses. It yields integers{" "}
              <MathJax inline>{"$s, t$"}</MathJax> such that{" "}
              <MathJax>{`\\[ s a + t m = 1 \\]`}</MathJax> , and reducing modulo{" "}
              <MathJax inline>{"$m$"}</MathJax> gives{" "}
              <MathJax inline>{"$s a \\equiv 1 \\pmod{m}$"}</MathJax> , so{" "}
              <MathJax inline>{"$s$"}</MathJax> serves as the modular inverse of{" "}
              <MathJax inline>{"$a$"}</MathJax> .
            </P>

            <P>
              For example, to find <MathJax inline>{"$3^{-1}$"}</MathJax> modulo
              11, one can apply the Euclidean algorithm:
              <MathJax>{`\\[ 11 = 3 \\cdot 3 + 2, \\quad 3 = 2 \\cdot 1 + 1 \\]`}</MathJax>{" "}
              , then back-substitute to write 1 as a linear combination:
              <MathJax>{`\\[ 1 = 4 \\cdot 3 - 1 \\cdot 11 \\]`}</MathJax> .
              Consequently,{" "}
              <MathJax inline>{"$3^{-1} \\equiv 4 \\pmod{11}$"}</MathJax> .
            </P>

            <P>
              In simple cases, one can often find the inverse by inspection. For
              instance, since{" "}
              <MathJax inline>{"$2 \\cdot 3 = 6 \\equiv 1 \\pmod{5}$"}</MathJax>{" "}
              , we immediately see{" "}
              <MathJax inline>{"$2^{-1} \\equiv 3 \\pmod{5}$"}</MathJax> .
            </P>

            <H2>Common Pitfalls</H2>
            <P>
              One must always verify that coefficients are coprime with their
              respective moduli before attempting to find inverses. Failing to
              normalize congruences before applying the CRT can lead to
              incorrect results. Arithmetic mistakes with large intermediate
              numbers can also propagate errors, so it is advisable to reduce
              modulo the relevant modulus whenever possible. Finally, it is
              standard to present the solution in its canonical form, typically{" "}
              <MathJax inline>{"$0 \\le X < M$"}</MathJax> , or explicitly in
              the general form <MathJax inline>{"$X = X_0 + Mk$"}</MathJax> .
            </P>
          </div>
        </main>
      </div>
    </MathJaxContext>
  );
}

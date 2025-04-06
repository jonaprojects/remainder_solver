import React from "react";
import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";
import classes from "../styles/Background.module.css";
import Header from "@/components/header/Header";
import Quote from "@/components/quote/Quote";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import ArticleImage from "@/components/images/ArticleImage";
import H1 from "@/components/typography/Headers/H1";
import H2 from "@/components/typography/Headers/H2";
import Section from "@/components/section/Section";
import PlanetsTable from "@/components/table/PlanetsTable";

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
            <Section>
              <H1>Abstract</H1>
              <p className={classes.par}>
                The Chinese Remainder Theorem (CRT) is a powerful tool for
                solving systems of congruences equations. Namely, it suggests
                that if we know the remainder that is obtained from dividing a
                number by other numbers, we can uniquely determine this number
                in a certain range.
              </p>
              <p className={classes.par}>
                We will study the origins of the theorem and examine its
                historical development over time, as notable mathematicians from
                different eras worked on it, for more than 2000 years. We will
                also see how it expresses the gap between oriental and western
                mathematics in ancient times.
              </p>
              <p className={classes.par}>
                In addition, we will see the formal statement of the theorem,
                and see a complete proof for it, based on known lemmas from
                Number Theory.
              </p>
              <p className={classes.par}>
                We will also review the modern applications in different fields,
                such as Cryptography, Engineering, Number Theory, and even radar
                systems.
              </p>
            </Section>
            <H1>History</H1>
            <Section>
              <H2>Origins</H2>
              <p className={classes.par}>
                The Chinese Remainder Theorem (CRT) first appeared in the
                writings of Sun-Zi, a notable mathematician from ancient China.
                The problem was introduced in his book &quot;Sun Zi
                Suanjing&quot;. Most of the problems he tackled were already
                known, but the remainder problem was a complete novelty at that
                time. In his book, he outlined the problem in the following way:
              </p>
              <Quote
                quote={`Now there are an unknown number of things. If we count by threes,
          there is a remainder 2; if we count by fives, there is a remainder 3;
          if we count by sevens, there is a remainder 2. Find the number of
          things.`}
                description={"Sun Zi, Around 3CE"}
              />
              <p className={classes.par}>
                Sun-Zi showed an example of a solution to these kinds of
                problems but did not provide any formal proof or algorithm, as
                we would expect according to {"today's"} mathematical standards
                and notation. In fact, a complete proof for the problem only
                came a thousand years after Sun-Zi originally presented it.
              </p>
              <p className={classes.par}>
                Sun Zi probably had no idea how influential this problem would
                be, even after more than 2000 years. The Chinese Remainder
                Theorem has applications in a variety of fields, from
                cryptography to even modern radar systems, as we will see
                shortly.
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
            </Section>
            <Section>
              <H2>Ancient India</H2>
              <p className={classes.par}>The solution to the equation:</p>
              <MathJax>{"\\[ ax + c = by \\]"} </MathJax>
              <p className={classes.par}>
                is referred to as{" "}
                <span className={classes.italic}>Kuttaka</span> by Indian
                mathematicians. According to legend, mathematician Aryabhata was
                tasked with finding the integer
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
              Which is exactly the original Kuttaka problem we have seen
              earlier.
              <p className={classes.par}>
                Indian mathematicians studied the aforementioned Kuttaka problem
                extensively and utilized remainders to express different
                questions in a variety of disciplines.
              </p>
              <p className={classes.par}>
                For instance, one of the most fascinating applications was in
                Astronomy. The ancient Indian mathematicians asked to study the
                movement of celestial bodies and predict their locations after a
                certain period of time, (which they often expressed as{" "}
                {'"kalpa"'})
              </p>
              <p className={classes.par}>
                <strong>For example:</strong> After completing their full
                revolutions, the Sun, Moon, Mars, etc., have moved for the
                following number of days:
              </p>
              <PlanetsTable />
              <p className={classes.par}>
                So the problem can be outlined in the following manner: Given
                that the Sun completes 3 revolutions in 1096 days, the Moon 5
                revolutions in 137 days, Mars 1 revolution in 185 days, Mercury
                13 revolutions in 1096 days, Jupiter 3 revolutions in 10,960
                days, and Saturn 1 revolution in 10,960 days, determine the
                number of days that have passed since the beginning of the
                Kalpa. (Brahmagupta, XVIII, sl 7-8, 6281)
              </p>
              <p>
                To find the number of days, we can express an appropriate system
                of congruences.
              </p>
              <MathJax>{equation}</MathJax>
            </Section>
            <Section>
              <H2> Qin Jiushaq</H2>
              <p className={classes.par}>
                In 1247, the chinese mathematician{" "}
                <span className={classes.italic}>Qin Jiushaq</span> published
                his work{" "}
                <span className={classes.italic}>Shu shufiu zhang</span>. In his
                work, he elaborated extensively on congruences of first degree,
                that is, equations of the form:
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
                Qin {"Jiushao's"} work on congruence equations is often
                accredited as the first complete proof of the Chinese Remainder
                Theorem.
              </p>
            </Section>
            <Section>
              <H2>Fibonacci</H2>
              <p className={classes.par}>
                Not known to many, Some of the most known names in mathematics
                actually came across the remainder problem. In 1202, the Italian
                mathematician Leonardo Fibonacci published his book{" "}
                {'"Liber Abaci"'}, which was one of the first western books to
                use the Hindu-Arabic numeral system.
              </p>
              <p className={classes.par}>
                In fact, it is even considered by some to be one of the most
                influential books in mathematics, since it played a pivotal role
                in the introduction of new ideas to Western mathematics, and
                even paved the way for the numeral system we use every day.
              </p>
              <p className={classes.par}>
                Fibonacci also wrote about a variety of mathematical topics,
                mainly in number theory and Euclidean geometry.
              </p>
              <p className={classes.par}>
                Among them, was the chinese remainder theorem. However,
                Fibonacci did not provide any explanation on how to solve it,
                and one might even claim his work was relavitely superficial in
                {"today's "}standards. (LIBBRECHT, Op, cit. p. 240)
              </p>
              <p className={classes.par}>
                {"It's"} also worth to mention that the famous{" "}
                <span className={classes.italic}>Fibonacci sequence</span> was
                described in <span className={classes.italic}>Liber Abaci</span>{" "}
                (even though it originated before fibonacci).
              </p>
              <ArticleImage
                path="/liber.jpg"
                description="A page of the Liber Abaci from the National Central Library, Wikipedia"
                alt="Liber Abaci"
              />
            </Section>
            <Section>
              <H2>17th-18th Centuries</H2>
              <p className={classes.par}>
                In the 18th century, some of the greatest mathematicians in
                history worked on the remainder problems: Leonard Euler
                (1707-1783), Joseph-Louis Lagrange(1736-1813) and Carl Friedrich
                Gauss (1777-1855). They managed to prove pivotal theorems and
                develop algorithms for the solving congruences.
              </p>
              <p className={classes.par}>
                In particular, Gauss had a significant impact in Number Theory.
                In 1801, he published his textbook{" "}
                <span className={classes.italic}>
                  Disquisitiones Arithmeticae
                </span>
                , (In English: Arithmetical Investigations). The book is still
                considered revolutionary by many, who suggest it paved the way
                for the modern Number Thoery.
              </p>
              <p className={classes.par}>
                In the first two chapters of the book, Gauss wrote extensively
                about congruences. Throughout the book, he also cited and
                described the works of other prominent mathematicians, such as
                Lagrange, Euler and Fermat, and managed to prove some of the
                most important theorems in Number Theory today.
              </p>
              <p className={classes.par}>
                For instance, he proved that any integer greater than 1 can be
                expressed as a unique multiplication of its prime factors. Due
                to its significance, it is often referred to as &quot;The
                Fundamental Theorem Of Arithmetic&quot;
              </p>
            </Section>
            <H1 className={classes.h1}>Formal Theorem</H1>
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
  0 \\leq x < N
  $$`}
              </MathJax>
              <MathJax>
                {`$$
  x \\equiv a_i \\pmod{n_i}
  $$`}
              </MathJax>
              <MathJax>
                {`$$
  \\forall i \\in \\{1, 2, \\dots, k\\}
  $$`}
              </MathJax>
            </div>
            <H1>Proof</H1>
            <p className={classes.par}>
              We are going to build our proof step by step. First, let us see
              some useful lemmas that we will use throughout our proofs.
            </p>
            <H2>Lemma 1</H2>
            <p className={classes.par}>
              Let <MathJax inline>{"$n$"}</MathJax> be a positive integer, and
              consider the ring of integers modulo
              <MathJax inline>{"$n$"}</MathJax>, denoted{" "}
              <MathJax inline>{"$\\mathbb{Z}_n$"}</MathJax>. An element{" "}
              <MathJax inline>{"$a \\in \\mathbb{Z}_n$"}</MathJax> has a
              multiplicative inverse if and only if{" "}
              <MathJax inline>{"$\\gcd(a, n) = 1$"}</MathJax>.
            </p>
            <H2>Lemma 2</H2>
            <p className={classes.par}>
              Let <MathJax inline>{"$p, q, n \\in \\mathbb{Z}$"}</MathJax> such
              that <MathJax inline>{"$\\gcd(p, q) = 1$"}</MathJax> . If{" "}
              <MathJax inline>{"$p \\mid n$"}</MathJax> and
              <MathJax inline>{"$q \\mid n$"}</MathJax>, then{" "}
              <MathJax inline>{"$pq \\mid n$"}</MathJax>.
            </p>
            <p className={classes.par}>
              That is, if <MathJax inline>{"$n$"}</MathJax> divides both{" "}
              <MathJax inline>{"$x$"}</MathJax> and{" "}
              <MathJax inline>{"$y$"}</MathJax>, it also divides their
              difference.
            </p>
            <H2>Proof for systems of 2 equations</H2>
            <p className={classes.par}>
              Theorem: Let <MathJax inline>{"$p$"} </MathJax> and
              <MathJax inline>{"$q$"}</MathJax> be coprime. Then the following
              system
            </p>
            <MathJax>
              {`\\[
        \\begin{aligned}
        x &\\equiv a \\pmod{p} \\\\
        x &\\equiv b \\pmod{q}
        \\end{aligned}
        \\]`}
            </MathJax>
            <p className={classes.par}>
              has a unique solution in modulo <MathJax inline>{"$pq$"}</MathJax>
              .
            </p>
            <p className={classes.par}>
              <strong>Proof:</strong>
              Let <MathJax inline>{"$p_1 = p^{-1} (mod q)$"}</MathJax>
              and <MathJax inline>{"$q_1 = q^{-1} (mod p)$"}</MathJax>
              Their existence is guaranteed from Lemma 1 presented, as
              <MathJax inline>{"$p$"}</MathJax> and{" "}
              <MathJax inline>{"$q$"}</MathJax> are coprime.
            </p>
            <p className={classes.par}>
              Let <MathJax inline>{"$y$"}</MathJax> be an integer such that
              <MathJax>{"\\[ y = aqq_1 + bpp_1 \\pmod{pq} \\]"}</MathJax>
              We can see that <MathJax inline>{"$y$"}</MathJax>
              indeed satisfies both equations.
            </p>
            <MathJax>
              {`\\[
        y = a q q_1 \\equiv a \\pmod{p}
        \\]`}
            </MathJax>
            <MathJax>
              {`\\[
        y = b p p_1 \\equiv b \\pmod{q}
        \\]`}
            </MathJax>
            Since <MathJax>{"\\[ qq_1 = 1 \\pmod{p} \\]"}</MathJax>
            <MathJax>{"\\[ pp_1 = 1 \\pmod{q} \\]"}</MathJax>
            <p className={classes.par}>
              The theorem also states that the solution is{" "}
              <span className={classes.italic}>unique</span> in modulo{" "}
              <MathJax inline>{"$pq$"}</MathJax>.
            </p>
            <p className={classes.par}>
              Let <MathJax inline>{"$z$"}</MathJax> be a solution to the
              congruence system we have defined above. Therefore we know that
            </p>
            <MathJax>
              {`\\[
        \\begin{aligned}
        z &\\equiv a \\pmod{p} \\\\
        z &\\equiv b \\pmod{q}
        \\end{aligned}
        \\]`}
            </MathJax>
            We also showed earlier that <MathJax inline>{"$y$"}</MathJax> is a
            solution to the system, and hence
            <MathJax>
              {`\\[
        \\begin{aligned}
        y &\\equiv a \\pmod{p} \\\\
        y &\\equiv b \\pmod{q}
        \\end{aligned}
        \\]`}
            </MathJax>
            From modular arithmetic, it follows that
            <MathJax inline>{"\\[z-y = 0 \\pmod{q} \\]"}</MathJax>
            <MathJax inline>{"\\[ z-y = 0 \\pmod{p} \\]"}</MathJax>
            And therefore <MathJax inline>{"$p$"}</MathJax> and{" "}
            <MathJax inline>{"$q$"}</MathJax> divide{" "}
            <MathJax inline>{"$z-y$"}</MathJax>. Namely:
            <MathJax>{"\\[ p \\mid z-y  \\]"}</MathJax>
            <MathJax>{"\\[ q \\mid z-y  \\]"}</MathJax>
            Since <MathJax inline>{"$p$"}</MathJax> and{" "}
            <MathJax inline>{"$q$"}</MathJax> are coprime, it follows from Lemma
            2 that
            <MathJax>{"\\[ pq \\mid  (z-y) \\]"}</MathJax>
            Which is equivalent to the following statement:
            <MathJax>{"\\[ z-y \\equiv 0 \\pmod{pq} \\]"}</MathJax>
            And from modular arithmetic we get
            <MathJax>{"\\[ z \\equiv y \\pmod{pq} \\]"}</MathJax>
            <p className={classes.par}>
              Namely, we have just seen that any solution the congruence system
              is equivalent to <MathJax inline>{"$y$"}</MathJax> in modulo{" "}
              <MathJax inline>{"$pq$"}</MathJax>, and therefore{" "}
              <MathJax inline>{"$y$"}</MathJax> is indeed a unique solution in
              modulo <MathJax inline>{"$pq$"}</MathJax>, as required.
            </p>
            <H2>Proof for the general case</H2>
            Finally, we are ready to prove the general case, where we have a
            congruence system of <MathJax inline>{"$k$"}</MathJax> equations .
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
            We will prove it by mathematical induction.
            <h3>
              Base case (<MathJax inline>{"$k=2$"})</MathJax>
            </h3>
            <p className={classes.par}>
              We proved the theorem for a set of two congruence equations
              earlier.
            </p>
            <h3>Inductive hypothesis:</h3>
            <p className={classes.par}>
              we will assume that theorem holds for an integer{" "}
              <MathJax inline>{"$m \\ge 2 $"}</MathJax>
            </p>
            <h3>Inductive Step:</h3>
            <p className={classes.par}>
              We will show that the theorem holds for{" "}
              <MathJax inline>{"$m+1$"}</MathJax>. Namely, we will show that
              theorem holds for a system of congruences with{" "}
              <MathJax inline>{"$m+1$"}</MathJax> equations
            </p>
            <p className={classes.par}>
              Let us observe the first <MathJax inline>{"$ m $"}</MathJax>{" "}
              equations of the system. From the inductive, hypothesis, we know
              that there exists a unique solution{" "}
              <MathJax inline>{"$ t $"}</MathJax> to the system in modulo{" "}
              <MathJax inline>{"$n_1 \\cdot n_2 \\cdots n_m$"}</MathJax>
            </p>
            <p className={classes.par}>
              So now we are left with the following system:
            </p>
            <MathJax>
              {`$$
          \\begin{cases}
          x \\equiv t \\pmod{n_1 \\cdot n_2 \\cdots n_m} \\\\
          x \\equiv a_{m+1} \\pmod{n_{m+1}} \\\\
          \\end{cases}
          $$`}
            </MathJax>
            <p className={classes.par}>
              This is a congruence system with 2 equations, and therefore from
              the base case for <MathJax inline>{"$k=2$"}</MathJax> it follows
              that there exist a unique solution{" "}
              <MathJax inline>{"$y$"}</MathJax> for the system in modulo
              <MathJax inline>{"$n_1 \\cdot n_2 \\cdots n_m$"}</MathJax>
            </p>
            <H1>Solving a single equation</H1>
            <p className={classes.par}>
              While the Chinese Remainder Theorem helps us deal with systems of
              equations, it is also essential to have the appropriate tools to
              solve a single congruence equation. In fact, we need to solve such
              equations in order to solve the entire system with the theorem, so
              this will definitely be handy.
            </p>
            <H2>Theorem</H2>
            Let us observe the equation
            <MathJax>{"$$ ax \\equiv b \\pmod{n}$$"}</MathJax>
            such that <MathJax inline>
              {"$n \\in \\mathbb{N}, n>1$"}
            </MathJax>{" "}
            and
            <MathJax inline>{"$a \\in \\mathbb{Z}$"}</MathJax>. And let{" "}
            <MathJax inline>{"$q, t \\in \\mathbb{Z}$"}</MathJax>, such that
            <MathJax>{"$$ d = gcd(a, n) = aq + nt $$"}</MathJax>
            <p className={classes.par}>
              We can always represent the greatest common divisor of a pair of
              numbers this way, as promised from the Euclidean Algorithm.
            </p>
            <p className={classes.par}>
              Then if <MathJax inline>{"$d \\mid b $"}</MathJax> then the
              equation has <MathJax inline>{"$d$"}</MathJax> solutions in{" "}
              {"$\\mathbb{Z}_n$"}:
              <MathJax>{"$$ x_k = x_0 + \\frac{kn}{d} $$"}</MathJax>
              for every <MathJax inline>{"$0 \\le k \\le d-1$"}</MathJax>.
            </p>
            <H1>Algorithm</H1>
            <p className={classes.par}>
              After proving the theorem, let us describe the general algorithm
              for systems of congruences. Let us observe the general case:
            </p>
            <MathJax>
              {`$$
          \\begin{cases}
          x \\equiv a_1 \\pmod{m_1} \\\\
          x \\equiv a_2 \\pmod{m_2} \\\\
          \\vdots \\\\
          x \\equiv a_k \\pmod{m_k}
          \\end{cases}
          $$`}
            </MathJax>
            <ol>
              <li>
                Make sure that the moduli are pairwise coprime, and that the
                coefficients of <MathJax inline>{"$x$"}</MathJax> are{" "}
                <MathJax inline>{"$1$"}</MathJax>.
              </li>
              <li>
                Let us define
                <MathJax>
                  {
                    "$$M_i = \\frac{m_1 \\cdot m_2 \\cdot \\dots \\cdot m_k }{m_i}$$"
                  }
                </MathJax>
                for each <MathJax inline>{"$i=1 \\dots k$"}</MathJax>
              </li>
              <li>
                Let <MathJax inline>{"$X_i$"}</MathJax> be the solution of the
                equation
                <MathJax>{"$$ M_iX_i = 1 \\pmod{m_i} $$"}</MathJax>
              </li>
              <li>
                The solution to the system <MathJax inline>{"$X$"}</MathJax>
                is defined as follows:
                <MathJax>
                  {
                    "$$ X = \\sum_{i=1}^{k} a_i M_i X_i \\pmod{\\prod_{i=1}^{k} m_i} $$"
                  }
                </MathJax>
              </li>
            </ol>
            <H1>Applications</H1>
            <Section>
              <H2>Optimization of modular arithmetic</H2>
              <p className={classes.par}>
                We can utilize the chinese remainder theorem to speed-up
                calculations made in modular arithmetic. Such calculations are
                often used in a plethora of fields, such as Cryptography,
                Engineering, and Astronomy.
              </p>
              <p className={classes.par}>
                One of the conclusions from the Chinese Remainder Theorem is
                that we can uniquely represent a number by its moduli from the
                division by different pairwise coprime numbers.
              </p>
              <p className={classes.par}>
                It allows us to transform a calculation with large numbers, to a
                series of calculations with smaller numbers, which is often more
                efficient in many algorithms. Later on, we could convert the
                result of the calculation back to a single number.
              </p>
              <p className={classes.par}>
                To formalize this mathematically, we want to represent a number
                in
                <MathJax inline>{"$\\mathbb{Z}_{pq}$"}</MathJax>
                as two numbers in
                <MathJax inline>{"$\\mathbb{Z}_{p}$"}</MathJax>
                and <MathJax inline>{"$\\mathbb{Z}_{q}$"}</MathJax>, and vice
                versa.
              </p>
              <p className={classes.par}>
                In other words, we want to prove that there is a
                <span className={classes.italic}>bijection</span>
                between <MathJax inline>{"$\\mathbb{Z}_{pq}$"}</MathJax>
                and{" "}
                <MathJax inline>
                  {"$\\mathbb{Z}_p \\times \\mathbb{Z}_q$"}
                </MathJax>
              </p>
              <p className={classes.par}>
                That is, we want to find an invertible function{" "}
                <MathJax inline>
                  {
                    "$\\varphi: \\mathbb{Z}_{pq} \\to \\mathbb{Z}_q \\times \\mathbb{Z}_p$"
                  }
                </MathJax>
              </p>
              .
              <p className={classes.par}>
                We will define <MathJax inline>{"$\\varphi$"}</MathJax>. Let{" "}
                <MathJax inline>{"$x \\in \\mathbb{Z}_{pq} $"}</MathJax>, then
                <MathJax inline>
                  {"$\\varphi(x) = (x \\pmod{p}, x \\pmod{q} )$"}.
                </MathJax>
                To prove that it is indeed a function we need show that for each
                <MathJax inline>{"$x \\in \\mathbb{Z}_{pq}$"}</MathJax>, there
                exists a unique value
                <MathJax inline>
                  {"$\\varphi(x) \\in \\mathbb{Z}_q \\times \\mathbb{Z}_p $"}
                </MathJax>
                . It is obvious that
                <MathJax inline>{"$\\varphi(x)$"} </MathJax>
                exists, since we can apply the modulus operator with repsect to
                <MathJax inline>{"$q$"}</MathJax> and{" "}
                <MathJax inline>{"$p$"}</MathJax>.
              </p>
              <p className={classes.par}>
                So we are left to prove that{" "}
                <MathJax inline>{"$\\varphi(x)$"} </MathJax>
                is unique. This is also quite straightforward, because both
                <MathJax inline>{"$x \\pmod{p}$"}</MathJax>
                and
                <MathJax inline>{"$x \\pmod{q}$"}</MathJax>
                are unique (we can easily show it via proof by contradiction).
              </p>
              <p>
                To show that <MathJax inline>{"$\\varphi$"} </MathJax> is
                invertible, we need to find{" "}
                <MathJax inline>
                  {
                    "$\\varphi^{-1}: \\mathbb{Z}_q \\times \\mathbb{Z}_p \\to \\mathbb{Z}_{pq}$"
                  }
                  where <MathJax inline>{"$p$"}</MathJax> and{" "}
                  <MathJax inline>{"$q$"}</MathJax> are coprime integers.
                </MathJax>
              </p>
              <p className={classes.par}>
                We will define
                <MathJax inline>{"$\\varphi$"} </MathJax> as the result of the
                Chinese Remainder Algorithm. The theorem ensures that such value
                exists, and it is unique in modulo
                <MathJax inline>{"$pq$"}</MathJax>, and thus{" "}
                <MathJax inline>{"$\\varphi$"} </MathJax> is indeed a function.
              </p>
              <p className={classes.par}>
                More explicitly, given
                <MathJax inline>{"$(a, b)$"}</MathJax> such that
                <MathJax inline>{"$a \\in \\mathbb{Z}_{p}$"}</MathJax>
                and <MathJax inline>{"$b \\in \\mathbb{Z}_{q} $"}</MathJax>
                We want to find a unique integer{" "}
                <MathJax inline>{"$x \\in \\mathbb{Z}_{pq}$"}</MathJax>, such
                that
                <MathJax>
                  {
                    "\\[ \\begin{cases} x \\equiv a \\pmod{p} \\\\ x \\equiv b \\pmod{q} \\end{cases} \\]"
                  }
                </MathJax>
                And as stated earlier, such <MathJax inline>{"$x$"}</MathJax>
                is unique, and can obtained via the Chinese Remainder Theorem.
              </p>
              <p className={classes.par}>
                To complete the proof, we need to show that{" "}
                <MathJax inline>{"$\\varphi^{-1}$"}</MathJax>
                is indeed the inverse of{" "}
                <MathJax inline>{"$\\varphi$"}</MathJax>. Hence, we need to show
                that for every{" "}
                <MathJax inline>{"$x \\in \\mathbb{Z}_{pq}$"}</MathJax>
                it holds that
                <MathJax inline>{"$\\varphi^{-1}(\\varphi(x)) = x$"}</MathJax>
                and that for every
                <MathJax inline>
                  {"$(a,b) \\in \\mathbb{Z}_{p} \\times \\mathbb{Z}_{q} $"}
                </MathJax>
                it holds that
                <MathJax inline>{"$\\varphi(\\varphi^{-1}(a,b)) = x$"}</MathJax>
              </p>
              .
              <p className={classes.par}>
                Let <MathJax inline>{"$x \\in \\mathbb{Z}_{pq}$"}</MathJax>. We
                showed earlier that there exist
                <MathJax inline>{"$a_1 \\in \\mathbb{Z}_{p}$"}</MathJax>
                and
                <MathJax inline>{"$a_2 \\in \\mathbb{Z}_{q}$"}</MathJax>
                such that{" "}
                <MathJax inline>{"$\\varphi(x) =(a_1, a_2) $"}</MathJax>. It
                also holds that{" "}
                <MathJax inline>{"$\\varphi^{-1}(a_1, a_2) = x$"}</MathJax>
                from the definition of
                <MathJax inline>{"$\\varphi$"}</MathJax>
                and the uniqueness that is ensured from the Chinese Remainder
                Theorem. Hence, by function composition we get
                <MathJax inline>{"$\\varphi^{-1}(\\varphi(x)) = x$"}</MathJax>
                as required.
              </p>
              <p className={classes.par}>
                Let{" "}
                <MathJax inline>
                  {"$(a, b) \\in \\mathbb{Z}_p \\times \\mathbb{Z}_{q}$"}
                </MathJax>
                . We can also show in a similar manner that
                <MathJax>
                  {"$$ \\varphi(\\varphi^{-1}(a, b)) = (a, b)$$"}
                </MathJax>
                from the uniqueness that is ensured by the CRT, and the modulus
                operation.
              </p>
              <h3>Theorem 1</h3>
              <p className={classes.par}>
                Let <MathJax inline>{"$x, y \\in \\mathbb{Z}_{pq}$"}</MathJax>,
                corresponding to
                <MathJax inline>
                  {"$(a, b), (c, d) \\in \\mathbb{Z}_p \\times \\mathbb{Z}_q$"}
                </MathJax>
              </p>
              then <MathJax inline>{"$x+y$"}</MathJax> corresponds to
              <MathJax inline>{"$(a+c, b+d)$"}</MathJax>, and
              <MathJax inline>{"$xy$"}</MathJax> corresponds to
              <MathJax inline>{"$(ac, bd)$"}</MathJax>
              <h3>Proof</h3>
              <p className={classes.par}>
                <MathJax>
                  {
                    "$$ \\varphi(x+y) = \\varphi(\\varphi^{-1}(a,b)+\\varphi^{-1}(c,d))$$"
                  }
                </MathJax>
                From modular arithmetic, we know that applying the modulus
                operator after an addition or element wise is equivalent. This
                principle applies to scalar, but can also be extended to vector
                addition, and thus
                <MathJax>
                  {
                    "$$ \\varphi^{-1}(a,b) + \\varphi^{-1}(c,d) = \\varphi^{-1}(a+c,b+d) $$"
                  }
                </MathJax>
                And hence we get that
                <MathJax>
                  {"$$\\varphi(x+y) = \\varphi(\\varphi^{-1}(a+c, b+d))$$"}
                  {"$$ = (a+c, b+d)$$"}
                </MathJax>
              </p>
              <p className={classes.par}>
                In a similar fashion, we can easily see that
                <MathJax>
                  {"$$xy \\pmod{p} = ac \\pmod{p} $$"}
                  {"$$xy \\pmod{q} = bd \\pmod{q} $$"}
                </MathJax>
                And thus <MathJax inline>{"$xy$"}</MathJax> can be represented
                by
                <MathJax inline>{"$(ac, bd)$"}</MathJax>.
              </p>
              <p className={classes.par}>
                Now, we could utilize our result to handle arithmetic
                operations, as was aforementioned earlier. For example, let us
                observe the following expression
                <MathJax>{"$$ 22 \\cdot 18 \\pmod{35} $$"}</MathJax>
              </p>
              <p className={classes.par}>
                By the previous theorems, we could break it down to several,
                easier calculations in
                <MathJax inline>{"$\\mathbb{Z}_5$"}</MathJax> and{" "}
                <MathJax inline>{"$\\mathbb{Z}_7$"}</MathJax>
              </p>
              <p className={classes.par}>
                We know that
                <MathJax>
                  {`\\[
\\begin{cases}
22 \\equiv 2 \\pmod{5} \\\\
22 \\equiv 1 \\pmod{7}
\\end{cases}
\\]`}
                </MathJax>
                so 22 can be represented as
                <MathJax inline>
                  {"$(2, 1) \\in \\mathbb{Z}_p \\times \\mathbb{Z}_q$"}
                </MathJax>
                . In a similar fashion, we can also represent 18 as
                <MathJax inline>{"$(3, 4)$"}</MathJax>
                And from the theorem we proved earlier, the result of their
                multiplication will be
                <MathJax>
                  {"$$(2 \\cdot 3, 1 \\cdot 4) \\equiv (1, 4)$$"}
                </MathJax>
              </p>
              <p className={classes.par}>
                Now to obtain our result in{" "}
                <MathJax inline>{"$\\mathbb{Z}_{pq}$"}</MathJax>, we simply
                apply the CRT to get
                <MathJax inline>{"$\\varphi^{-1}(1,4)$"}</MathJax>, which yields
                the result <MathJax inline>{"$11 \\pmod{35}$"}</MathJax>
                One could of course verify the validity of these calculations by
                himself, by multiplying the two numbers, and only then applying
                the modulus operator.
              </p>
              <h3>Generalization</h3>
              <p className={classes.par}>
                In the previous example, we were able to factorize 35 into 2
                coprime factors.This allowed us to utilize the conclusions from
                the Chinese Remainder Theorem. Let us generalize this process
                for all positive integers.
              </p>
              <p className={classes.par}>
                The Fundamental Theorem Of Arithmetic ensures that we would
                always be able to do so. The theorem suggests that every
                positive integer.
                <MathJax inline>{"$x$"}</MathJax> can be uniquely represented in
                the following way:
                <MathJax>
                  {`\\[
n = \\prod_{i=1}^{n} p_i^{k_i}
\\]`}
                </MathJax>
                where <MathJax inline>{"$p_i$"}</MathJax>
                are primes, and <MathJax inline>{"$k_i$"}</MathJax>
                are the number of times these primes appear in the
                factorization.
              </p>
              <p className={classes.par}>
                For each{" "}
                <MathJax inline>{"$i, j \\in \\{1, \\dots, n\\}$"}</MathJax>{" "}
                such that
                <MathJax inline>{"$i \\ne j$"}</MathJax>, it holds that{" "}
                <MathJax inline>
                  {"$\\gcd(p_i^{k_i} \\cdot p_j^{k_j}) = 1$"}
                </MathJax>
              </p>
              <p className={classes.par}>
                In addition, We proved earlier for each
                <MathJax inline>{"$p, q$"}</MathJax> which are coprime and
                greater than 1 that{" "}
                <MathJax>
                  {`$$
    \\mathbb{Z}_{pq} \\cong \\mathbb{Z}_p \\times \\mathbb{Z}_q
  $$`}
                </MathJax>
                It can be generalized to the following statement:
                <MathJax>
                  {`$$
    \\mathbb{Z}_{p_1 p_2 \\dots p_n} \\cong \\mathbb{Z}_{p_1} \\times \\mathbb{Z}_{p_2} \\times \\dots \\times \\mathbb{Z}_{p_n}
  $$`}
                </MathJax>
                when{" "}
                <MathJax inline>
                  {"$p_1, p_2, \\dots p_n \\in \\mathbb{N}$"} are greater than 1
                  and are pairwise coprime.
                </MathJax>
                Therefore, in order to solve a calculation of the form
                <MathJax>{"$$ a \\cdot b \\pmod{n} $$"}</MathJax>
                where <MathJax inline>
                  {"$ a, b, n \\in \\mathbb{N} $"}
                </MathJax>{" "}
                are greater than 1, it is always possible to factorize{" "}
                <MathJax inline>{"$n$"}</MathJax> and do the calculations for
                every <MathJax inline>{"$\\mathbb{Z}_{p_i}$"}</MathJax>{" "}
                separately.
              </p>
              <p className={classes.par}>
                For example, let us observe the following exercise:
                <MathJax>{"$$ 42 \\cdot 34 \\pmod{24} $$"}</MathJax>
              </p>
              <p className={classes.par}>
                First, let us factorize <MathJax inline>{"$24$"}</MathJax> into
                prime factors. As mentioned earlier, this is guaranteed from the
                Fundamental Theorem of Arithmetic.
              </p>
              <MathJax>
                {"$$ 24 = 2 \\cdot 2 \\cdot 2 \\cdot 3 = 8 \\cdot 3 $$ "}
              </MathJax>
              <p className={classes.par}>
                It is easy to see that <MathJax inline>{"$8$"}</MathJax> and{" "}
                <MathJax inline>{"$3$"}</MathJax> are coprime. In fact, every
                <MathJax inline>{"$p^k,q^m \\in \\mathbb{N}$"}</MathJax> are
                coprime, where
                <MathJax inline>{"$p \\ne q$"}</MathJax> are primes, and
                <MathJax inline>{"$ k,m \\in \\mathbb{N} $"}</MathJax>.
              </p>
              <p className={classes.par}>
                It is easy to see that
                <MathJax>{"$$42 \\equiv 0 \\pmod{3}$$"}</MathJax>
                <MathJax>{"$$42 \\equiv 2 \\pmod{8}$$"}</MathJax>
              </p>
              And hence we can represent <MathJax inline>{"$42$"}</MathJax> as{" "}
              <MathJax inline>
                {"$(0,2) \\in \\mathbb{Z}_3 \\times \\mathbb{Z}_8 $"}
              </MathJax>
              <p className={classes.par}>
                In a similar manner, we can say that
                <MathJax>{"$$34 \\equiv 1 \\pmod{3}$$"}</MathJax>
                <MathJax>{"$$34 \\equiv 2 \\pmod{8}$$"}</MathJax>
                And hence we can represent <MathJax inline>
                  {"$42$"}
                </MathJax> as{" "}
                <MathJax inline>
                  {"$(1,2) \\in \\mathbb{Z}_3 \\times \\mathbb{Z}_8 $"}{" "}
                </MathJax>
              </p>
              <p>
                We can now perform element-wise multiplication with respect to
                the moduli on the vectors we have, as we have seen earlier.
              </p>
              <MathJax>
                {"$$ (0,2)(1,2) = (0\\cdot 1, 2 \\cdot 2) = (0,4)$$"}
              </MathJax>
              <p className={classes.par}>
                To get the solution we will then solve the following system of
                equations via the Chinese Remainder Theorem:
                <MathJax>
                  {`$$
          \\begin{cases}
          x \\equiv 0 \\pmod{3} \\\\
          x \\equiv 4 \\pmod{8} \\\\
          \\end{cases}
          $$`}
                </MathJax>
                The solution to this system is{" "}
                <MathJax inline>{"$12$"}</MathJax>, which is also the result of
                our computation.
              </p>
              <p className={classes.par}>
                We can also verify this result by doing the calculation
                explicitly on modulo 24.
                <MathJax>
                  {"$$ 42 \\cdot 34 \\pmod{24} = 1428 \\pmod{24} $$"}
                </MathJax>
                <MathJax>{"$$1428 \\pmod{24} = 12 \\pmod{24} $$"}</MathJax>
              </p>
            </Section>
          </div>
        </main>
      </div>
    </MathJaxContext>
  );
}

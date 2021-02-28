---
title: "Order execution II: Price improvement"
---

We continue our series on [order execution]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}). In this post, we take a turn and discuss some arguments in favor of market makers.

### An information hierarchy

Recall that in [Part I]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}), the situation regarding market makers seemed pretty bleak: The system seemed to be one where brokers and market makers colluded to stiff retail customers. The only thing protecting retailer traders was essentially competition among brokers and market makers (as well as some transparency regulations barely enforced by the SEC). Such protection requires a well-informed retail customer base, which is dubious.

However, there exists an argument that the market maker infrastructure can actually benefit retail investors.

The argument is founded on the premise that there are essentially three tiers of traders, each with less insider knowledge than the next:

1. Retail traders, 
2. Market makers,
3. Hedge funds, banks, and insiders.

The argument is that as a result, there should essentially be two exchanges: One pseudo-exchange in which the retailers and market makers participate, and an actual exchange, in which the market makers and insiders participate. This offers retailers a thin layer of protection from the insiders.

### Price improvement

In (theoretical) practice, this would work as follows: 

Market makers profit from bid-ask spreads and the law of large numbers, rather than insider information. As a result, to ensure that their operations remain profitable, they are forced to increase their bid-ask spreads on exchanges where large insiders participate. In contrast, on "exchanges" where only uninformed retailers participate (meaning, the stream of orders from retail brokers), there is low risk of contamination by insider information. Further, the law of large numbers takes effect very efficiently due to small and diverse participation. They can thus reduce their bid-ask spreads, so that the retailers can obtain slightly better prices. Part of the price reduction is passed on to the retailer; this is known as _price improvement_. (The remainder is passed on to the broker and referred to as _payment for order flow_.)

Still, even assuming this system benefits retail traders, the division between price improvement and payment for order flow is at the discretion of the broker. As a result, my advice from [Part I]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}) stands: It's important to research which broker you use, since some may have better price improvement policies than others. This is particularly important if you place large trades.

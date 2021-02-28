---
title: "Order execution III: Best execution and the NBBO"
---

We continue our series on [order execution]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}). In this post, we seek to better understand the sense in which brokers are required to obtain the best available prices for their customers. We saw in [Part I]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}) and [Part II]({{ "" | relative_url }}{% post_url 2021-02-27-order-execution-ii %}) that brokers have a few options to choose from when executing a customer's order. 

Recall I started this series by noting the large amount of misinformation on the subject, especially with the recent GME phenomenon. Accordingly, the more research I do, the less sinister the industry seems to be. Regulation actually does stipulate that brokers must serve their customers with the best possible execution. On the other hand, other sources imply that this is taken to be a figurative requirement. To determine who is right, we need to get into the weeds.

### National Best Bid and Offer

When you research the price and volume of AAPL stock from publicly available data, what is the source of that data? This is not obvious, now that we are aware that stock transactions may occur off of a centralized exchange.

The answer lies in the _National Best Bid and Offer_, or the NBBO. It turns out that hypothetical [best offer price]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}) that I dreamed up in Part I actually exists and is officially regulated, tracked, and published via the NBBO. The data used to compute the NBBO includes all official exchanges and market makers. (Secret exchanges known as _dark pools_ are naturally excluded; these typically consist of exchanges by large funds which hope to avoid moving markets with their activity.)

The official NBBO is computed and reported by an entity known as the Consolidated Tape Association via a Securities Information Processor (I believe the CTA is the institution, while the SIP is the technology). The official SIP does a reasonable job reporting accurate data, but does not put too much of an effort on speed. Private high frequency trading (HFT) firms exploit this by essentially managing faster SIPs than the CTA. They can thus predict the future by a few microseconds and profit accordingly.

### Best execution

At the minimum, brokers must serve their customers with the NBBO quotes. This is one of the stipulations of the _Regulation National Market System_ (regulation NMS). Other requirements include improved data access, as well as setting quote increment minimums.

### Implications

What does this mean for the retail trader? To my mind, the current system is not a bad one for the retail trader. The removal of market makers from the system would put retail traders in competition with high frequency trading firms, which unlike market makers, trade on information, not just scale. 

It's probable that market makers also try to act on early information, but at least the market maker designation regulates them a little. Further, the system of price improvement and payment for order flow may be viewed as healthy competition between HFT and market maker firms. In other words, a market maker which does price improvement may be viewed as an HFT firm which is returning its profits to is customers to maintain loyalty, indicative of an efficient and competitive industry. Brokers may essentially be viewed as negotiating units for retailers, taking control away from the vastly powerful HFT firms.

Of course, the broker still has discretion on how to allocate between price improvement and payment for order flow - how much of the fruits of their negotiating power trickles down to the retail customer. Inter-brokerage competition in this arena may be simply viewed as the next battle in the war over retail commissions.


### References and further reading

Here is one of the more thorough and balanced articles I found on the subject of payment for order flow, price improvement, best execution, market makers, and high frequency trading: https://a16z.com/2021/02/17/payment-for-order-flow/

Here is another article that is pretty informative and less bullish on the whole system: https://www.warriortrading.com/payment-for-order-flow/

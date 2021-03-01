---
title: "Order execution III: Best execution and the NBBO"
---

We continue our series on [order execution]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}). In this post, we seek to better understand the sense in which brokers are required to obtain the best available executions for their customers. We saw in [Part I]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}) and [Part II]({{ "" | relative_url }}{% post_url 2021-02-27-order-execution-ii %}) that brokers have a few options to choose from when executing a customer's order. 

Regulation actually does stipulate that brokers must serve their customers with the best possible execution. On the other hand, some sources imply that this is taken to be a figurative requirement. To determine who is right, we need to get into the weeds.

### National Best Bid and Offer

When you research the price and volume of AAPL stock from publicly available data, what is the source of that data? This is not obvious, now that we are aware that stock transactions may occur off of a centralized exchange.

The answer lies in the _National Best Bid and Offer_, or the NBBO. It turns out that hypothetical [best offer price]({{ "" | relative_url }}{% post_url 2021-02-24-order-execution %}) that I dreamed up in Part I actually exists and is officially regulated, tracked, and published via the NBBO. The data used to compute the NBBO includes all official exchanges and market makers. (Secret exchanges known as _dark pools_ are naturally excluded; these typically consist of trading by large funds which hope to avoid moving markets with their activity.)

The official NBBO is computed and reported by an entity known as the Consolidated Tape Association via a Securities Information Processor (I believe the CTA is the institution, while the SIP is the technology). The official SIP does a reasonable job reporting accurate data, but does not put too much of an effort on speed. Private high frequency trading (HFT) firms exploit this by essentially managing faster SIPs than the CTA. They can predict the future by a few microseconds and profit accordingly.

### Best execution

At the minimum, brokers must serve their customers with the NBBO quotes. This is one of the stipulations of the _Regulation National Market System_ (regulation NMS). Other requirements include improved data access, as well as setting quote increment minimums.

### Implications

To my mind, the current system is not terrible for the retail trader. The removal of market makers from the system would put retail traders in direct competition with HFT firms, which unlike market makers, trade on information, not just scale. 

You could argue that this distinction is only theoretical: In practice, market makers probably also serve as HFT firms, seeking to act on speed and early information. But actually, the system of price improvement and payment for order flow may be viewed as healthy _competition_ between HFT firms. In other words, a price-improving market maker may be viewed as an HFT firm which has been pressured into returning its profits to its customers, indicative of an efficient and competitive industry. Brokers may be viewed as negotiating units for retailers, who otherwise would be powerless against HFT firms.

Of course, the broker still has discretion on how to allocate between price improvement and payment for order flow - how much of the fruits of their negotiating power trickles down to the individual union member, so to speak. Inter-brokerage competition in this arena may be simply viewed as the next battle in the war over retail commissions.

Food for thought: There is a potential _advantage_ for larger retail traders to trade on Robinhood, for the same reason that market makers value Robinhood order flow highly: Robinhood order flow is a sum of many small, independent orders. In such an ecosystem, there is a lot of price improvement to be collected and shared between the market maker, Robinhood, and retailers. At the moment, Robinhood doesn't seem to offer good price improvement, but as inter-brokerage competition increases, this may change.


### References and further reading

[Here](https://a16z.com/2021/02/17/payment-for-order-flow/) is one of the more thorough and balanced articles I found on the subject of payment for order flow, price improvement, best execution, market makers, and high frequency trading.

[Here](https://www.warriortrading.com/payment-for-order-flow/) is another article that is pretty informative and less bullish on the whole system.

---
title: "Order execution: Payment for order flow"
---

<div class="media">
  <p>Nobody should believe that Robinhood's trades are free.</p>
  
  <p>- Charlie Munger (February 24, 2021)</p>
</div>

Trading stocks is a relatively seamless experience due to high liquidity. You can essentially buy or sell a stock at its quoted price at any time during market hours. 

Options markets have much lower liquidity, and so it's important to understand what's going on under the hood. It's also important to understand order execution when placing large stock orders.

Note: I am not an expert, and the internet contains a lot of vague, incomplete, and incorrect information on this topic. This post inaugurates a series of posts with the goal of filling in the gaps. Some questions below will be left unanswered, hopefully to be studied in depth in future posts.

### The cast

First, we need to understand the main parties involved in each stock transaction:

1. The price taker, typically a retail trader.
2. The broker, which links the retail trader with the market.
4. The market maker, a large firm which is obligated to have buy and sell orders open at all times during market hours.
5. The stock exchange itself.

### The execution

In an ideal exchange, the broker would direct a retail customer's order, say a market-buy order, to a central stock exchange. The stock exchange would have a list of existing limit-sell orders. The highest limit-sell order would be scooped up, and paired with the market-buy order. The transaction would close.

For whatever reason - I have not yet found a satisfactory answer online - the above system either does not exist, does not work, or is not mandated. Instead, most online brokers direct stock trades to a market maker, which is essentially just a large trader who is obligated by regulation to have both buy and sell orders open at all times. This market maker gets to fill the order, at whichever price it happens to have quoted for the stock in advance. 

Does this price have to match or beat the best selling price on the exchange, as described above? This is where things get murky, and the answer gets complicated. Roughly speaking, the answer is some form of no: It is accepted practice for market makers to buy low and sell high. The difference is euphemistically known as that market maker's _bid-ask spread_. In that case, what prevents the market maker from quoting ludcrious spreads, like a gazillion dollars on sales and pennies on purchases?

One obvious answer is that orders with ludicrous spreads would simply appear on the exchange and never get filled (by any party, broker or otherwise). The market maker would be wasting its time and capital. 

### Payment for order flow

However, this brings us to payment for order flow, which is what it sounds like: Market makers typically pay brokers a cut if they choose to route their customers' orders to them. This sounds a lot like collusion between the broker and the market maker, to overcharge customers for stock purchases, and to undercompensate them for stock sales. Is the situation as dire as it sounds?

My understanding is that there is still some competition among market makers and brokers. For instance, Charles Schwab has a good reputation; it would be devestating to the company if someone - either the SEC or an attentive retail customer - uncovered impropriety in its trade execution.

However, my other understanding is that regulators and customers are willing to overlook such impropriety, if the overcharge (via the bid-ask spread) is on the order of pennies or basis points. As a result, it would behoove customers with larger accounts to research brokers' execution practices before settling with one.

### Open questions

Here are more subtle open questions that I have found harder to research:

1. How are retail limit orders routed?
2. Options trades have extremely low liquidity. Exchange-wide bids and asks seem to be visible from publicly available data. Are market makers involved?

We'll address these and other open questions in future posts.

---
title: "Order execution, market makers, and payment for order flow"
---

<div class="media">
  <p>Nobody should believe that Robinhood's trades are free.</p>
  
  <p> Charlie Munger (February 24, 2021)</p>
</div>

Trading stocks is a relatively seamless experience due to high liquidity. You can essentially buy or sell at the quoted price at any time during market hours. 

Options markets have much lower liquidity, and so it's important to understand what's going on underneath. It's also important to understand order execution when placing large stock orders.

Note: I am not an expert, and the internet contains a lot of soft, incomplete, and incorrect information on this topic. I want to start filling in the gaps, but there is still much to understand. More is to be said in future posts as more information comes to light. Maybe my co-writer can help answer some of the unanswered questions below!

### The cast

First, we need to understand the main parties involved in each stock transaction:

1. The price taker, typically a retail buyer or seller.
2. The broker, which links the retail trader with the market.
4. The market maker, a large firm which is obligated to have open buy and sell orders at all times.
5. The stock exchange itself.

### The execution

In an ideal exchange, the broker would direct a retail customer's order, say a market-buy order, to a central stock exchange. The stock exchange would have a list of existing limit-sell orders. The highest limit-sell order would be scooped up, and paired with the market-buy order. The transaction would close.

For whatever reason - I could not find a satisfactory answer online - the above system either does not exist or is not mandated. Instead, most online brokers direct stock trades to a market maker, which is essentially just a large trader which is obligated by regulation to have both buy and sell orders open at all times. This market maker gets to fill the order, at whichever price it happens to have quoted for the stock in advance. 

Does this price have to match or beat the best selling price on the exchange, as described above? This is where things get murky, and I was uanble to find an answer; I assume the answer is no. In that case, what prevents the market maker from quoting a ludcrious price, like a gazillion dollars? My guess is that there is still some competition among market makers - not to mention competition among brokers. For instance, Charles Schwab has a good reputation; it would be devestating to the company if someone to uncovered impropriety in its trade execution.

### Payment for order flow

Which brings us to payment for order flow, which is what it sounds like: When a market maker pays the broker a cut if they choose to route their customers' orders to them. This sounds a lot like collusion between the broker and the market maker, to overcharge customers for stock purchases, and to undercompensate them for stock sales. I was unable to find a good secondary source explaining regulation that protects customers from this practice.

### More questions

Here are more subtle questions that are harder to research:

1. How are retail limit orders routed?
2. Options trades have extremely low liquidity. Exchange-wide bids and asks seem to be visible from publicly available data. Are market makers involved?


---
title: "What is a Stock Option?"
---

A stock option is a contract that gives the holder the right (but not the obligation) to buy or sell a specific _number of shares_ of a particular _stock_ for a specific _price_ before a particular _date_.

## The theoretical stuff

Given the above, an option is defined fully by four factors:
- the stock 
- the strike price 
- the expiry date
- the contract multiplier (the number of shares)

For example, the holder of an AAPL March call option for $120 (with the standard 100 contract multiplier) can choose to _exercise_ the option at any time before or on the March expiry date. This gives him or her the right to buy 100 shares of Apple Inc. stock at a price of $120 per share at the time of exercise. 

### Some practical stuff

- A "call" option gives the right of the holder to buy. A "put" option gives the right of the holder to sell. 
- The standard US equities contract multiplier is 100. 
- There is a standard option expiry calendar. For example a 2021 March option expires on March 20th.

### The four basic option trades

There are two kinds of options - calls and puts - and one can buy or sell each kind. 

This gives rise to four basic option trades:

- buying a call, where one pays for a contract now giving one the right to buy shares in the future.
- buying a put, where one pays for a contract now giving one the right to sell shares in the future.
- shorting / selling a call, where one receives payment now in exchange for the commitment to sell shares in the future at the strike price if the option is exercised by some counterparty.
- shorting / selling a put, where one receives payment now in exchange for the commitment to buy shares in the future at the strike price when the option is exercised by some counterparty.

Various sophisticated _option strategies_ are all based on executing a combination of these for basic option trades. 

Note that an option derives its value from the underlying contract and the rights granted to the holder within, but the holder need not exercise the option to realize the value (and in fact this is rarely done). The option is a financial instrument, and like any financial instrument with a sufficiently liquid market, one can _sell_ the option to another market participant to realize the value of the option. See next section for more details. 


### The value of an option

An option contract has value. To understand why intuitively, imagine that we currently hold a AAPL March call option for $120. At the time of writing the current market price for a share of AAPL stock is $125.86. Therefore, what we can do is that we can exercise this option, buy 100 shares of AAPL for $120 (for a total cost of $12,000) and then immediate sell these 100 shares on the open market for a price of $125.86 (for a total profit of $12,586). This maneuver immediately gives us a net profit of $586. Because of the ability to realize this profit, the value of this option is _at least_ $586 (equivalently, another market participant would be willing to pay us _at least_ $586 to buy this option from us). Now, the value of this option will strictly exceed $586 because at the time writing there is 25 days remaining until the expiry date of this option on March 20th, and the remaining value derives from the _possibility_ or _potential benefit_ of AAPL stock price rising futher in those remaining days before expiry. 

More precisely, the value of an option can be decomposed into:
- intrinsic value, the benefit that can be realized by immediately exercising the option.
- extrinsic value, the potential benefit of holding the option into an unknown and unrealized future (where advantageous stock price movements may occur for whatever reason).

A visualization of the intrinsic and extrinsic value of an option:

<img src="https://lh3.googleusercontent.com/8NpOnuVj0jOiSZpmpTeXpP0o4vTJqBwpfGucyYfs-1w1RVBd3UzTB9ZBcVoHPZW-qhaYFv7WtMnHaKLAyIFd1NOwjZXb_jWJrS8Dp2yFYxnaWcijx3WPtvxtSvxYUvJKci6HMD7vC_T4qoy5jy7i7fCr6p16qrCypl9QgTpOEnnEM3I1bZFmj6daZJRDoHY7e4pOEdJUMwZu6Qvr3Sw-V1I5IWq5LMtBV-ufSKLXbXdZTKvK8NlQ-VuJAQ2dKLh9RKMOem6aNz0YLR5O9Sqgz2YENflQQ40qy0BkK7PTorGd0qdRq2fbnYmD6BOQHBjYi_9SNmQYS-dv0VmYO6_zsZE2RDQv55UtEppyMe_OesCYhOA8Avs7S7gF3rgX-fJaugdO3x7aEO9N2rD5-NftQHly9qT9g_prJujGH3UYMbsT-Bb_vTwRPpGbg9MuCMxol3Vx36poVawaXboG57JtvBWjIKZbV4YNsn2gu0Od268a1m3-Z1xWiW-kWgOzSHjP5YJnWu2e1khksHW2I6Je6wGcNPJf_XvHgQHCo4ApA3WiogAnYEYjOuWbx8R7yf9qN9bIfVdlSrrztJh10ri0VKL2pYgS4Z2WmLy9YLwzpBLHpScmf2QTnZb2XSO7OunEbuKBLXqv1WKK2AFv1LFP1GR36TQLTJKapOIiTHE9GhCYAA75FGOk7tIMq7FNMmgArcJnqiXDK8aUGfm9fi0XH5U=w1750-h1100-no?authuser=0">

There are three factors that change the value of an option:
- the price of the underlying stock, which changes the intrinsic value of the option.
- the passage of time, which changes the extrinsic value of the option.
- a change in implied volatility, which changes the extrinsic value of the option.

The relationship between the three factors and the four basic option trades are as follows:


_           | stock price | expiry date | volatility
------------| ----------- | ----------- | -------------
long call   | proportional| inverse     | proportional
long put    | inverse     | inverse     | proportional
short call  | inverse     | proportional| inverse
short put   | proportional| proportional| inverse

*N.B. same / opposite indicates movement correlation, i.e. a long call being "same" with stock price is to be read as "the stock price and the value of being long a call option moves in the same direction", equivalently "as the underlying stock's price increases, the long call option trade gains value".

A more precise relationship between these factors and the value of options is represented by the Option greeks. 


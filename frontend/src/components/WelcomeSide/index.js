import './WelcomeSide.css';

const WelcomeSide = () => {
  return (
    <>
      <div className="welcome-side">
        <h2>Discover lululemon Membership</h2>
        <hr />
        <p>One account. Tons of benefits. Endless possibilities.</p>
        <br />
        <h2>Member benefits include</h2>
        <hr />
        <ul>
          <li><i class="fa-solid fa-bag-shopping"></i>Early Access to Product Drops</li>
          <li><i class="fa-solid fa-rotate-left"></i>Returns on Sale Items</li>
          <li><i class="fa-solid fa-play"></i>Select lululemon Studio Content</li>
          <li><i class="fa-solid fa-person"></i>Virtual Community Events</li>
          <li><i class="fa-solid fa-truck-fast"></i>Receipt-Free and Fast-Track Returns</li>
          <li><i class="fa-solid fa-scissors"></i>Free Hemming</li>
        </ul>
      </div>
    </>
  )
}

export default WelcomeSide;
export const Process = (props) => {
    return (
      <div id='process'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Join in a few steps</h2>
          </div>
          
          <div className='row justify-content-between'>
                <div className='col-xs-6 col-md-2 text-center'>
                  {' '}
                  <i className="fa fa-sign-in"></i>
                  <h3>Join</h3>
                  <p>Create Account or Login</p>
                </div>

                <div className='col-xs-6 col-md-2 text-center'>
                  {' '}
                  <i className="fa fa-image"></i>
                  <h3>Report</h3>
                  <p>Share a photo or description of the pest or disease</p>
                </div>

                <div className='col-xs-6 col-md-2 text-center'>
                  {' '}
                  <i className="fa fa-info"></i>
                  <h3>Get Help</h3>
                  <p>Get a treatment plan from our biologists or knowledge database</p>
                </div>

                <div className='col-xs-6 col-md-2 text-center'>
                  {' '}
                  <i className="fa fa-shopping-cart"></i>
                  <h3>Browse Shops</h3>
                  <p>Get the location and price of the nearest shop for the treatment plan</p>
                </div>

                <div className='col-xs-6 col-md-2 text-center'>
                  {' '}
                  <i className="fa fa-phone"></i>
                  <h3>Call</h3>
                  <p>Call or visit the website of the shop of your choice for instant purchase and delivery</p>
                </div>
          </div>

        </div>
      </div>
    )
  }
  
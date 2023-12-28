import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

// about page 
const Filter = () => {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };
  
  return (
<>
<div className="container filterSetion">
<div className="row">
<div className="col-md-10">
<MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink className='tabs' onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
     Show All
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className='tabs' onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
           New
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className='tabs' onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
           Classic 
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className='tabs' onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
            Shop
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      </div>
      {/* <MDBTabsContent>
        <MDBTabsPane open={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent> */}
      <div className="col-md-2 searchtabForm">
      <MDBInput  label='Search ...' id='form1' type='text' />
      </div>
<div className="col-md-3 projectCard">
<MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>     
        <MDBCardTitle className='text-center projectTitle'>Project Name</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
</div>
<div className="col-md-3 projectCard">
<MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center projectTitle'>Project Name</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
</div>
<div className="col-md-3 projectCard">
<MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center projectTitle'>Project Name</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
</div>
      </div>
      </div>

      </>
  )
}

export default Filter
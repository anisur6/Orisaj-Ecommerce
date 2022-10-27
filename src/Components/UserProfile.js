import React from 'react';
import { Container, Row } from 'react-bootstrap';

const UserProfile = () => {
    return (
        <>
        <Container>
            <Row>			
                <div class="col-xl-6 mb-3 col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                        <label class="small mb-2 text-dark ft-medium">Name *</label>
                        <input type="text" class="form-control p-3 shadow border-0 rounded-0" value="First Name " />
                    </div>
                </div>

                
                <div class="col-xl-6 mb-3 col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                        <label class="small mb-2 text-dark ft-medium">Email ID *</label>
                        <input type="text" class="form-control p-3 shadow border-0 rounded-0" value="demo@gmail.com" />
                    </div>
                </div>
                
                <div class="col-xl-12 mb-3 col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                        <label class="small mb-2 text-dark ft-medium">About Us *</label>
                        <textarea class="form-control p-3 shadow border-0 rounded-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</textarea>
                    </div>
                </div>
                
                <div class="col-xl-6 mb-3 col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                        <label class="small mb-2 text-dark ft-medium">Current Password *</label>
                        <input type="text" class="form-control p-3 shadow border-0 rounded-0" value="Current Password" />
                    </div>
                </div>
                
                <div class="col-xl-6 mb-3 col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                        <label class="small mb-2 text-dark ft-medium">New Password *</label>
                        <input type="text" class="form-control p-3 shadow border-0 rounded-0" value="New Password" />
                    </div>
                </div>
                
                <div class="col-xl-12  col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                        <button type="button" class="btn btn-dark px-5 py-2 mt-3">Save Changes</button>
                    </div>
                </div>
									
        </Row>
        </Container>
            
        </>
    );
};

export default UserProfile;
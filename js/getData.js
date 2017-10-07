var session_info = {
                "user_id": "test@test.com",
                "access_token": "aeuhsy78989ljjsj",
                "device_id": "1"
    		}
var base_url = "http://52.66.157.195/growayu/ganewdesign/api"
var getData = {
	getDashboardData: function(){
		var url = "/getDocAppointmentDashboard.php"
		var appntment_input = {
                "date" : "20-09-2017",
                "doctor_id" : "12",
                "hcc_id" : ""
    	}
        var data = {
        	appntment_input: appntment_input,
        	session_info: session_info
        }
        var call = $.ajax({
        	type: "POST",
        	url: base_url+url,
        	data: data,
        	dataType: 'json',
        	success: function (res,status) {
	        	return res;
	      	},
	   		error: function(err,status){
	   			return 	{
				  "error": {
				    "result": "0",
				    "error_code": "00",
				    "error_message": "",
				    "error_type": ""
				  },
				  "appointments_details": {
				    "appointment": [
				      {
				        "appointment_id": "156",
				        "appointment_type": "VC",
				        "appointment_date": "12-04-2017",
				        "appointment_time": "19:30:00+05:30",
				        "appointment_status": "booked",
				        "health_seeker": {
				          "health_seeker_name": "Sachindran K",
				          "health_seeker_id": "21"
				        },
				        "hcc_det": {
				          "hcc_id": "",
				          "hcc_name": ""
				        }
				      }
				    ],
				    "appointment_summary": {
				      "total": "10",
				      "pending": "10",
				      "missed": "10"
				    },
				    "next_appointment_date": "14-10-2017",
				    "prev_appointment_date": "14-08-2017"
				  }
				}
	   		}	
		}).then(function(res){
			return res
		}).catch(function(res){
			return 	{
				  "error": {
				    "result": "0",
				    "error_code": "00",
				    "error_message": "",
				    "error_type": ""
				  },
				  "appointments_details": {
				    "appointment": [
				      {
				        "appointment_id": "156",
				        "appointment_type": "VC",
				        "appointment_date": "12-04-2017",
				        "appointment_time": "19:30:00+05:30",
				        "appointment_status": "booked",
				        "health_seeker": {
				          "health_seeker_name": "Sachindran K",
				          "health_seeker_id": "21"
				        },
				        "hcc_det": {
				          "hcc_id": "",
				          "hcc_name": ""
				        }
				      }
				    ],
				    "appointment_summary": {
				      "total": "10",
				      "pending": "10",
				      "missed": "10"
				    },
				    "next_appointment_date": "14-10-2017",
				    "prev_appointment_date": "14-08-2017"
				  }
				}
		});
		return call;
	}
}

$(document).ready(function(){
	getData.getDashboardData().then(function(res){
		$('#total').text(res.appointments_details.appointment_summary.total)
		$('#pending').text(res.appointments_details.appointment_summary.pending)
		$('#missed').text(res.appointments_details.appointment_summary.missed)
		$('#shcedule-date').text(res.appointments_details.appointment[0].appointment_date)
		var source   = $("#appointmentTemplate").html();
		var template = Handlebars.compile(source);
		var html = template(res.appointments_details);
		$('#appointment-list').html(html)		
	}) 

	/*getting appointment details*/
	$('#appointment-list').on('click', '.appointment',function(ev){
		var id = ev.currentTarget.id;
//		getData.getAppointmentDetails(id).then(function(res){
//			debugger
//		})
	})
})
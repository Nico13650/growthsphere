document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'fr', // Active la traduction française

    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth timeGridDay'
    },
    buttonText: {
      today: 'Aujourd\'hui',
      month: 'Mois',
      day: 'Jour'
    },

    dateClick: function(info) {
      calendar.changeView('timeGridDay', info.dateStr);
    },

    events: [
      {
        title: 'Disponible',
        start: '2025-07-04T09:00:00',
        end:   '2025-07-04T11:30:00',
        color: '#10b981'
      },
      {
        title: 'Indisponible',
        start: '2025-07-04T11:30:00',
        end:   '2025-07-04T14:00:00',
        color: '#ef4444'
      }
    ]
  });

  calendar.render();
});

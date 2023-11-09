<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\Mission;

class MissionOutcomeUpdated extends Notification
{
    use Queueable;
    
 public $mission;
    /**
     * Create a new notification instance.
     */
    public function __construct($mission)
    {
        $this->mission = $mission;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail( $notifiable): MailMessage
    {
        $mission_id= $this->mission->id;
        $name= $this->mission->name;
        $outcome= $this->mission->outcome;

        return (new MailMessage)
                    ->subject('Mission Outcome Updated')
                    ->greeting('Hello,' .$notifiable->name.', ')
                    ->line('Mission' .'#' .$mission_id. $name. 'outcome has been updated to' . $outcome.'.');
                   
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}

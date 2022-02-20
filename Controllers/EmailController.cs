using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using SendGrid;
using SendGrid.Helpers.Mail;

namespace webapitest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly ILogger<EmailController> _logger;

        public EmailController(ILogger<EmailController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<string> Send([FromForm] ContactForm form)
        //public async Task<string> Send(ContactForm form)
        {
            var apiKey = "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";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(form.Email, form.Name);
            var subject = $"Email from GetTableService.co.uk website by {form.Name}";
            var to = new EmailAddress("team@GetTableService.co.uk", "GetTableService Team");
            var htmlContent = $"<p>Full Name: {form.Name}</p>";
            htmlContent += $"<p>Business Name: {form.BusinessName}</p>";
            htmlContent += $"<p>Email: {form.Email}</p>";
            if (!string.IsNullOrEmpty(form.WebAddress))
            {
                htmlContent += $"<p>MenuWebAddress {form.WebAddress}</p>";
            }

            var msg = MailHelper.CreateSingleEmail(from, to, subject, null, htmlContent);
            if (form.File != null)
            {
                using (var ms = new MemoryStream())
                {
                    form.File.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    msg.AddAttachment(form.File.FileName, Convert.ToBase64String(fileBytes));
                }
            }
            var response = await client.SendEmailAsync(msg);

            return "email sent";
        }
    }

    public class ContactForm
    {
        public string Name { get; set; }
        public string BusinessName { get; set; }
        public string Email { get; set; }
        public string WebAddress { get; set; }
        public IFormFile File { get; set; }
    }
}

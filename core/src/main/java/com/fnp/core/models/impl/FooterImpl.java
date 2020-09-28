package com.fnp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fnp.core.models.Footer;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Footer.class,
    ComponentExporter.class}, resourceType = FooterImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FooterImpl implements Footer {

  @ValueMapValue(
      name = "disclaimer",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String disclaimer;

  @ValueMapValue(
      name = "fileReference",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String fileReference;


  private static final Logger LOGGER = LoggerFactory.getLogger(FooterImpl.class);
  static final String RESOURCE_TYPE = "fnp/components/footer";

  @Override
  public String getExportedType() {
    return FooterImpl.RESOURCE_TYPE;
  }


  @Override
  public String getDisclaimer() {
    return this.disclaimer;
  }

  @Override
  public String getLogoSrc() {
    return this.fileReference;
  }
}
